import {ButtonHTMLAttributes, ReactNode} from 'react';
import './button.scss';
import add from '../assets/add.svg';
import cart from '../assets/cart.svg';
import download from '../assets/download.svg';
import login from '../assets/login.svg';
import logout from '../assets/logout.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'text';
  shadow?: boolean;
  disable?: boolean;
  size?: 'sm' | 'md' | 'xl';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  startIcon?: 'add' | 'cart' | 'download' | 'login' | 'logout';
  endIcon?: 'add' | 'cart' | 'download' | 'login' | 'logout';
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = 'default',
  shadow = true,
  disable = false,
  size = 'md',
  color = 'default',
  children = 'Default',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  const className = `btn-base btn-variants-${variant} ${color} btn-size-${size} ${
    shadow ? 'shadow' : 'no-shadow'
  }`;
  const findIcon = (icon: string | undefined): string | undefined => {
    if (!icon) return;
    return icon === 'add'
      ? add
      : icon === 'cart'
      ? cart
      : icon === 'download'
      ? download
      : icon === 'login'
      ? login
      : logout;
  };
  return (
    <button className={className} disabled={disable} {...props}>
      {startIcon && <img src={findIcon(startIcon)} />}
      {children}
      {endIcon && <img src={findIcon(endIcon)} />}
    </button>
  );
}
