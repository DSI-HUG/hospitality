import {
    type AfterContentInit,
    ContentChildren,
    DestroyRef,
    Directive,
    ElementRef,
    inject,
    NgZone,
    type QueryList
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl, NgModel } from '@angular/forms';
import {
    MatListOption,
    MatSelectionList
} from '@angular/material/list';

@Directive({
    selector: 'mat-selection-list[hySingleSelectionToggle]',
    standalone: true
})
export class HySingleSelectionToggleDirective implements AfterContentInit {
    @ContentChildren(MatListOption, { descendants: true })
    private readonly options!: QueryList<MatListOption>;

    @ContentChildren(MatListOption, {
        descendants: true,
        read: ElementRef
    })
    private readonly elements!: QueryList<ElementRef<HTMLElement>>;

    private readonly ngControl = inject(NgControl, {
        self: true,
        optional: true
    });

    private readonly selectionList = inject(MatSelectionList);
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly optionCleanups = new Map<MatListOption, () => void>();

    public ngAfterContentInit(): void {
        if (!this.ngControl?.control) {
            return;
        }

        const syncOptionListeners = (): void => {
            this.optionCleanups.forEach(cleanup => {
                cleanup();
            });
            this.optionCleanups.clear();

            this.options.forEach((option, index) => {
                const element = this.elements.get(index);

                if (!element) {
                    return;
                }

                this.optionCleanups.set(
                    option,
                    this.attachOptionListeners(option, element.nativeElement)
                );
            });
        };

        syncOptionListeners();

        this.options.changes
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(syncOptionListeners);

        this.elements.changes
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(syncOptionListeners);

        this.destroyRef.onDestroy(() => {
            this.optionCleanups.forEach(cleanup => {
                cleanup();
            });
            this.optionCleanups.clear();
        });
    }

    private attachOptionListeners(
        option: MatListOption,
        element: HTMLElement
    ): () => void {
        const isToggleBlocked = (): boolean =>
            option.disabled || this.selectionList.multiple;

        const toggleOption = (): void => {
            this.zone.run(() => {
                option.toggle();
                this.updateFormValue();
            });
        };

        const handleClick = (event: MouseEvent): void => {
            if (isToggleBlocked()) {
                return;
            }

            event.preventDefault();
            event.stopImmediatePropagation();
            toggleOption();
        };

        const handleKeydown = (event: KeyboardEvent): void => {
            if (
                isToggleBlocked() ||
                event.repeat ||
                (event.key !== 'Enter' && event.key !== ' ')
            ) {
                return;
            }

            event.preventDefault();
            event.stopImmediatePropagation();
            toggleOption();
        };

        element.addEventListener('click', handleClick, true);
        element.addEventListener('keydown', handleKeydown, true);

        return (): void => {
            element.removeEventListener('click', handleClick, true);
            element.removeEventListener('keydown', handleKeydown, true);
        };
    }

    private updateFormValue(): void {
        const value = this.selectionList.selectedOptions.selected.map(
            (option): unknown => option.value
        );

        this.ngControl?.control?.setValue(value);

        if (this.ngControl instanceof NgModel) {
            this.ngControl.viewToModelUpdate(value);
        }
    }
}

