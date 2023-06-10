import { memo } from 'react';
import type { IIconPropsWithFill } from '../interfaces';

const CallsFromSiteIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 18 18'
        width='18'
        height='18'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.63 10.67c.07-.55.12-1.1.12-1.67 0-.57-.05-1.12-.12-1.67h2.82a6.87 6.87 0 0 1 0 3.34h-2.82Zm-1.47 4.63c.5-.93.88-1.93 1.15-2.97h2.46a6.7 6.7 0 0 1-3.61 2.97Zm-.21-4.63h-3.9a11.06 11.06 0 0 1 0-3.34h3.9c.08.54.13 1.1.13 1.67 0 .57-.05 1.12-.13 1.67ZM9 15.63c-.7-1-1.25-2.1-1.6-3.3h3.2c-.35 1.2-.9 2.3-1.6 3.3ZM5.67 5.67H3.23a6.6 6.6 0 0 1 3.6-2.97c-.5.92-.87 1.92-1.16 2.97Zm-2.44 6.66h2.44c.29 1.04.66 2.04 1.16 2.97a6.67 6.67 0 0 1-3.6-2.97Zm-.68-1.66a6.87 6.87 0 0 1 0-3.34h2.82c-.07.55-.12 1.1-.12 1.67 0 .57.05 1.12.12 1.67H2.55ZM9 2.36c.7 1 1.25 2.11 1.6 3.3H7.4c.35-1.19.9-2.3 1.6-3.3Zm5.77 3.3H12.3a13.04 13.04 0 0 0-1.15-2.96 6.66 6.66 0 0 1 3.6 2.97ZM9 .67a8.34 8.34 0 1 0 .02 16.69A8.34 8.34 0 0 0 9 .67Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#ADBFDF'}
        />
      </svg>
    );
  },
);

export default CallsFromSiteIcon;
