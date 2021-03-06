import { darken, lighten } from 'polished';

// Break Points
export const maxMobileWidth = '768px';

// Colors
export const colorBlack = '#000';
export const colorBlack80 = lighten(0.2, colorBlack);
export const colorBlack50 = lighten(0.5, colorBlack);
export const colorBlack30 = lighten(0.7, colorBlack);
export const colorBlack5 = lighten(0.95, colorBlack);
export const colorFont = colorBlack80;
export const colorPrimary = '#861F1F';
export const colorPrimaryDark = darken(0.1, colorPrimary);
export const colorPrimaryLight = lighten(0.1, colorPrimary);
export const colorPrimaryLightest = lighten(0.65, colorPrimary);
export const colorRed = 'red';
export const colorWhite = '#fff';
export const facebookBlue = '#3C5A99';

// Font Weights
export const fontWeightBlack = '700';
export const fontWeightBold = '500';
export const fontWeightRegular = '400';
export const fontWeightLight = '300';
export const fontWeightThin = '100';

// Font Sizes
export const fontSizeXsmall = '10px';
export const fontSizeSmall = '12px';
export const fontSizeBase = '14px';
export const fontSizeMedium = '18px';
export const fontSizeLarge = '22px';
export const fontSizeXlarge = '28px';
export const fontSizeJumbo = '35px';

export default {
  // Break Points
  maxMobileWidth,

  // Colors
  colorBlack,
  colorBlack80,
  colorBlack50,
  colorBlack30,
  colorBlack5,
  colorFont,
  colorPrimary,
  colorPrimaryDark,
  colorPrimaryLight,
  colorPrimaryLightest,
  colorRed,
  colorWhite,
  facebookBlue,

  // Font Weights
  fontWeightBlack,
  fontWeightBold,
  fontWeightRegular,
  fontWeightLight,
  fontWeightThin,

  // Font Sizes
  fontSizeXsmall,
  fontSizeSmall,
  fontSizeBase,
  fontSizeMedium,
  fontSizeLarge,
  fontSizeXlarge,
  fontSizeJumbo,
}