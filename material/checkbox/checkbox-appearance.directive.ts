
/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HyCheckboxAppearanceType = 'error';

@Directive({
    selector: 'mat-checkbox[hyAppearance]',
    standalone: true,
    host: {
        '[attr.hyAppearance]': 'hyAppearance()'
    }
})
export class HyCheckboxAppearanceDirective {
    public hyAppearance = input<HyCheckboxAppearanceType | null>(null);
}

