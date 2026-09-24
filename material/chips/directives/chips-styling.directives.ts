import { HyChipColorDirective } from './chips-color.directive';
import { HyChipSizeDirective } from './chips-size.directive';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HyChipStylingDirectives = [
    HyChipSizeDirective,
    HyChipColorDirective
] as const;

export {
    HyChipColorDirective, HyChipSizeDirective
};

