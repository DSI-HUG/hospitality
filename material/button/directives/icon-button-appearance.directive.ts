/* eslint-disable @typescript-eslint/naming-convention */
import { Directive, input } from '@angular/core';

export type HyAppearanceIconType = 'warning' | 'warning-filled' | 'tonal' | 'filled';

@Directive({
    selector: `
        button[matIconButton][hyAppearance]
    `,
    standalone: true,
    host: {
        '[attr.hyAppearance]': 'hyAppearance()'
    }
})
export class HyIconButtonAppearanceDirective {
    public hyAppearance = input<HyAppearanceIconType | null>(null);
}
