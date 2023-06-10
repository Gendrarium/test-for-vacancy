import ArrowDownIcon from '@assets/icons/ArrowDownIcon';
import CalendarIcon from '@assets/icons/CalendarIcon';

interface CalendarProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  onCenterClick: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  text,
  onLeftClick,
  onRightClick,
  onCenterClick,
}) => {
  return (
    <div className='calendar'>
      <button
        type='button'
        className='calendar__arrow-button'
        onClick={onLeftClick}>
        <ArrowDownIcon
          className='calendar__arrow-icon calendar__arrow-icon_left'
          fill='calendar__icon-fill'
        />
      </button>
      <button
        className='calendar__container'
        type='button'
        onClick={onCenterClick}>
        <CalendarIcon fill='calendar__icon-fill' />
        <p className='calendar__text'>{text}</p>
      </button>
      <button
        type='button'
        className='calendar__arrow-button'
        onClick={onRightClick}>
        <ArrowDownIcon
          className='calendar__arrow-icon calendar__arrow-icon_right'
          fill='calendar__icon-fill'
        />
      </button>
    </div>
  );
};

export default Calendar;
