import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavPerformersIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 16 16'
        width='16'
        height='16'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm0 9c2.7 0 5.8 1.29 6 2v1H2v-.99C2.2 12.29 5.3 11 8 11ZM8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavPerformersIcon;
