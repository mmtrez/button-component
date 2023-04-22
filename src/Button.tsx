import {ButtonType} from './helpers/types';
import {defaultButton} from './helpers/defaults';
import './styles/button.css';

export default function Button({
  variant = defaultButton.variant,
  disableShadow = defaultButton.disableShadow,
  disable = defaultButton.disable,
  size = defaultButton.size,
  color = defaultButton.color,
  children,
  attributes,
}: ButtonType) {
  const className = `btn-base btn-variants-${variant} ${color} btn-size-${size} ${
    disableShadow ? 'no-shadow' : 'shadow'
  }`;

  console.log(attributes);

  return (
    <button className={className} disabled={disable} {...attributes}>
      {children}
    </button>
  );
}
