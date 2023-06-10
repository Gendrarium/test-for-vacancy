import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavOrdersIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 24 14'
        width='24'
        height='14'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18 2 16.59.59l-6.34 6.34 1.41 1.41L18 2ZM22.24.59 11.66 11.17 7.48 7 6.07 8.41 11.66 14l12-12L22.24.59ZM.41 8.41 6 14l1.41-1.41L1.83 7 .41 8.41Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavOrdersIcon;
