import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const ArrowDownIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 12 8'
        width='12'
        height='8'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.41.59 6 5.17 10.59.59 12 2 6 8 0 2 1.41.59Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#ADBFDF'}
        />
      </svg>
    );
  },
);

export default ArrowDownIcon;
