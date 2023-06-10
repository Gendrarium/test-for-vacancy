import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const PlusButtonIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 24 24'
        width='24'
        height='24'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6 13.2h-4.8V18h-2.4v-4.8H6v-2.4h4.8V6h2.4v4.8H18v2.4Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#005FF8'}
        />
      </svg>
    );
  },
);

export default PlusButtonIcon;
