/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HySizeType = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

@Directive({
    selector: `
        [hy-size],
        [hy-appearance]
    `,
    standalone: true,
    host: {
        '[attr.hy-size]': 'hySize()',
        '[attr.hy-appearance]': 'hyAppearance()'
    }
})
export class ComponentsStylingDirective {
    public hySize = input<HySizeType | null>(null, { alias: 'hy-size' });
    public hyAppearance = input<string | null>(null, { alias: 'hy-appearance' });
}
