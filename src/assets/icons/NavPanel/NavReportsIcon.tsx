import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavReportsIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 20 19'
        width='20'
        height='19'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18 4c.58 0 1.05.2 1.42.59.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41-.37.39-.84.59-1.42.59H2c-.58 0-1.05-.2-1.42-.59A1.99 1.99 0 0 1 0 17V6c0-.55.2-1 .58-1.41C.95 4.2 1.42 4 2 4h4V2c0-.58.2-1.05.58-1.42A1.9 1.9 0 0 1 8 0h4c.58 0 1.05.2 1.42.58.38.37.58.84.58 1.42v2h4ZM2 6v11h16V6H2Zm10-2V2H8v2h4Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavReportsIcon;
