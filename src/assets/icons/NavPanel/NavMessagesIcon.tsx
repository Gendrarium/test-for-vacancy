import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavMessagesIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 20 16'
        width='20'
        height='16'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18 0H2A2 2 0 0 0 .01 2L0 14c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 14H2V4l8 5 8-5v10Zm-8-7L2 2h16l-8 5Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavMessagesIcon;
