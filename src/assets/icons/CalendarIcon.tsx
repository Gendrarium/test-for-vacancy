import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const CalendarIcon: React.FC<IIconPropsWithFill> = memo(
  ({ className, fill }) => {
    return (
      <svg
        viewBox='0 0 16 18'
        width='16'
        height='18'
        fill='none'
        className={className ? className : ''}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M14.4 1.64h-.8V0H12v1.64H4V0H2.4v1.64h-.8c-.88 0-1.6.73-1.6 1.63v13.1C0 17.26.72 18 1.6 18h12.8c.88 0 1.6-.74 1.6-1.64V3.27c0-.9-.72-1.63-1.6-1.63Zm0 14.72H1.6V5.73h12.8v10.63Z'
          className={fill ? fill : ''}
          fill={fill ? undefined : '#ADBFDF'}
        />
      </svg>
    );
  },
);

export default CalendarIcon;
