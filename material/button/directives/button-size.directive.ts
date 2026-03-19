/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HySizeType = 'small' | 'medium' | 'x-large';

@Directive({
    selector: 'button[hySize]',
    standalone: true,
    host: {
        '[attr.hySize]': 'hySize()'
    }
})
export class HyButtonSizeDirective {
    public hySize = input<HySizeType | null>(null);
}
