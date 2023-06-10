import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const NavKnowledgeBaseIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 18 22'
        width='18'
        height='22'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm0 8.55A13.15 13.15 0 0 0 0 7v11c3.48 0 6.64 1.35 9 3.55A13.2 13.2 0 0 1 18 18V7c-3.48 0-6.64 1.35-9 3.55Zm7 5.58c-2.53.34-4.93 1.3-7 2.82a15.2 15.2 0 0 0-7-2.83V9.17c2.1.38 4.05 1.35 5.64 2.83L9 13.28l1.36-1.27A11.18 11.18 0 0 1 16 9.18v6.95Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#FFFFFF'}
        />
      </svg>
    );
  },
);

export default NavKnowledgeBaseIcon;
