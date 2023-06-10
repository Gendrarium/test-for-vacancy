import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavDocsIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 16 20'
        width='16'
        height='20'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4 14h8v2H4v-2Zm0-4h8v2H4v-2Zm6-10H2a2 2 0 0 0-2 2v16a2 2 0 0 0 1.99 2H14a2 2 0 0 0 2-2V6l-6-6Zm4 18H2V2h7v5h5v11Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavDocsIcon;
