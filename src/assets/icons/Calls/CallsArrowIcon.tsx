import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const CallsArrowIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 13 13'
        width='13'
        height='13'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='m0 11.34 1.18 1.18 9.67-9.67v5.5h1.67V0H4.17v1.67h5.5L0 11.34Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#28A879'}
        />
      </svg>
    );
  },
);

export default CallsArrowIcon;
