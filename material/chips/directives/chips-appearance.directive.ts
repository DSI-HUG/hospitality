/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HyAppearanceType = 'tag' | 'tag-error' | 'tag-warning' | 'tag-success' | 'tag-error-strong' | 'tag-warning-strong' | 'tag-success-strong' | 'status';

@Directive({
    selector: 'mat-chip[hyAppearance]',
    standalone: true,
    host: {
        '[attr.hyAppearance]': 'hyAppearance()'
    }
})
export class HyChipAppearanceDirective {
    public hyAppearance = input<HyAppearanceType | null>(null);
}
