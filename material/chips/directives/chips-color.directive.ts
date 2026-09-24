/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

@Directive({
    selector: 'mat-chip[hyColor]',
    standalone: true,
    host: {
        '[attr.hyColor]': 'hyColor()'
    }
})
export class HyChipColorDirective {
    public hyColor = input<boolean | null>(null);
}
