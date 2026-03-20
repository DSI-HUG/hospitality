import { HyButtonAppearanceDirective } from './button-appearance.directive';
import { HyButtonSizeDirective } from './button-size.directive';
import { HyIconButtonAppearanceDirective } from './icon-button-appearance.directive';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ButtonStylingDirectives = [
    HyButtonSizeDirective,
    HyButtonAppearanceDirective,
    HyIconButtonAppearanceDirective
] as const;

export {
    HyButtonAppearanceDirective, HyButtonSizeDirective, HyIconButtonAppearanceDirective
};

