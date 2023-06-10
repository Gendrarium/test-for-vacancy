import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavResultsIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        width='22'
        height='12'
        viewBox='0 0 22 12'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='m2 8 .5.07L7.07 3.5a1.95 1.95 0 0 1 .52-1.91 1.97 1.97 0 0 1 2.82 0c.53.52.7 1.26.52 1.91l2.57 2.57L14 6c.18 0 .35 0 .5.07l3.57-3.57C18 2.35 18 2.18 18 2a2 2 0 1 1 2 2c-.18 0-.35 0-.5-.07L15.93 7.5A2 2 0 1 1 12 8l.07-.5L9.5 4.93a2.4 2.4 0 0 1-1 0L3.93 9.5 4 10a2 2 0 1 1-2-2Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavResultsIcon;
