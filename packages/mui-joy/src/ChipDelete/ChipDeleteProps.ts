import * as React from 'react';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { SxProps } from '../styles/defaultTheme';
import { ColorPaletteProp, VariantProp } from '../styles/types';

export type ChipDeleteSlot = 'root';

export interface ChipDeletePropsColorOverrides {}
export interface ChipDeletePropsVariantOverrides {}

export interface ChipDeleteTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    color?: OverridableStringUnion<
      Exclude<ColorPaletteProp, 'context'>,
      ChipDeletePropsColorOverrides
    >;
    /**
     * If provided, it will replace the default icon.
     */
    children?: React.ReactNode;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
    /**
     * The variant to use.
     * @default 'contained'
     */
    variant?: OverridableStringUnion<VariantProp, ChipDeletePropsVariantOverrides>;
  };
  defaultComponent: D;
}

export type ChipDeleteProps<
  D extends React.ElementType = ChipDeleteTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<ChipDeleteTypeMap<P, D>, D>;
