
/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HyBadgeAppearanceType = 'warning' | 'error';

@Directive({
    selector: '[matBadge][hyBadgeAppearance]',
    standalone: true,
    host: {
        '[attr.hyBadgeAppearance]': 'hyBadgeAppearance()'
    }
})
export class HyBadgeAppearanceDirective {
    public hyBadgeAppearance = input<HyBadgeAppearanceType | null>(null);
}
