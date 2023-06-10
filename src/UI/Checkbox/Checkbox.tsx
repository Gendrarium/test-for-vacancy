interface CheckboxProps {
  className?: string;
  inputClassName?: string;
  spanClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  inputClassName,
  spanClassName,
}) => {
  return (
    <button className={`checkbox${className ? ' ' + className : ''}`}>
      <label className='checkbox__label'>
        <input
          className={`checkbox__input${
            inputClassName ? ' ' + inputClassName : ''
          }`}
          type='checkbox'
          id='checkbox-input'
        />
        <span
          className={`checkbox__span${
            spanClassName ? ' ' + spanClassName : ''
          }`}
        />
      </label>
    </button>
  );
};

export default Checkbox;
