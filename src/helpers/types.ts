import {
  AllHTMLAttributes,
  Attributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from 'react';

export type ButtonType = {
  variant?: string;
  disableShadow?: boolean;
  disable?: boolean;
  size?: string;
  color?: string;
  children?: ReactNode;
  attributes?: object;
};
