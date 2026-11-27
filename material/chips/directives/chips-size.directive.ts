/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HySizeType = 'x-small' | 'medium';

@Directive({
    selector: 'mat-chip[hySize]',
    standalone: true,
    host: {
        '[attr.hySize]': 'hySize()'
    }
})
export class HyChipSizeDirective {
    public hySize = input<HySizeType | null>(null);
}
