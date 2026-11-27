import { HyChipAppearanceDirective } from './chips-appearance.directive';
import { HyChipSizeDirective } from './chips-size.directive';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HyChipStylingDirectives = [
    HyChipSizeDirective,
    HyChipAppearanceDirective
] as const;

export {
    HyChipAppearanceDirective, HyChipSizeDirective
};

