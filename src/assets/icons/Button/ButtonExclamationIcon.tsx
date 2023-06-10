import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const ButtonExclamationIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        className={className ? className : ''}
        width='25'
        height='25'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13 .5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm1.25 18.75h-2.5v-2.5h2.5v2.5Zm0-5h-2.5v-7.5h2.5v7.5Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#D8E4FB'}
        />
      </svg>
    );
  },
);

export default ButtonExclamationIcon;
