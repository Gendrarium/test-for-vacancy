import { memo } from 'react';
import type { IIconPropsWithFill } from './interfaces';

const SearchIcon: React.FC<IIconPropsWithFill> = memo(({ className, fill }) => {
  return (
    <svg
      viewBox='0 0 16 16'
      width='16'
      height='16'
      fill='none'
      className={className ? className : ''}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.44 10.06h-.73l-.25-.24a5.95 5.95 0 1 0-.64.64l.24.25v.73L14.64 16 16 14.64l-4.56-4.58Zm-5.5 0a4.11 4.11 0 1 1 0-8.22 4.11 4.11 0 0 1 0 8.22Z'
        className={fill ? fill : ''}
        fill={fill ? undefined : '#ADBFDF'}
      />
    </svg>
  );
});

export default SearchIcon;
