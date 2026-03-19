import { HyButtonAppearanceDirective } from './button-appearance.directive';
import { HyButtonSizeDirective } from './button-size.directive';
import { HyIconButtonAppearanceDirective } from './icon-button-appearance.directive';

export const BUTTON_DIRECTIVES = [
    HyButtonSizeDirective,
    HyButtonAppearanceDirective,
    HyIconButtonAppearanceDirective
] as const;

export {
    HyButtonAppearanceDirective, HyButtonSizeDirective, HyIconButtonAppearanceDirective
};

