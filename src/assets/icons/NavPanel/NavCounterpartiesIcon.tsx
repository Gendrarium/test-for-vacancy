import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavCounterpartiesIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 20 14'
        width='20'
        height='14'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7 8.75c-2.34 0-7 1.17-7 3.5V14h14v-1.75c0-2.33-4.66-3.5-7-3.5ZM2.34 12A9.64 9.64 0 0 1 7 10.75c1.79 0 3.82.67 4.66 1.25H2.34ZM7 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V14h4v-1.75c0-2.02-3.5-3.17-5.96-3.44ZM13 7a3.5 3.5 0 0 0 0-7c-.54 0-1.04.13-1.5.35a5.44 5.44 0 0 1 0 6.3c.46.22.96.35 1.5.35Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavCounterpartiesIcon;
