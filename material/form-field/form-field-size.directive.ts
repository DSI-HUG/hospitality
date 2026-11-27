/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HyFormFieldSizeType = 'small' | 'medium' | 'large';

@Directive({
    selector: 'mat-form-field[hySize]',
    standalone: true,
    host: {
        '[attr.hySize]': 'hySize()'
    }
})
export class HyFormFieldSizeDirective {
    public hySize = input<HyFormFieldSizeType | null>(null);
}
