import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavCallsIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        className={className ? className : ''}
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M3.54 2c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51Zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49a15.43 15.43 0 0 1-3.8-.75l1.2-1.19ZM4.5 0H1a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.49a1 1 0 0 0-1-1c-1.24 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 5.5 1a1 1 0 0 0-1-1Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavCallsIcon;
