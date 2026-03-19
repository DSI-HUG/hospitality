/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HyAppearanceType = 'warning';

@Directive({
    selector: 'button[matButton]:not([matButton="outlined"]):not([matButton="tonal"]):not([matButton="elevated"])',
    standalone: true,
    host: {
        '[attr.hyAppearance]': 'hyAppearance()'
    }
})
export class HyButtonAppearanceDirective {
    public hyAppearance = input<HyAppearanceType | null>(null);
}
