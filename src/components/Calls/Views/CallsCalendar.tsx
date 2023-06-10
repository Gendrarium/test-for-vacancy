import Calendar from '@UI/Calendar/Calendar';
import Menu from '@UI/Menu/Menu';
import { IHandleMenuClick } from '@interfaces/index';
import { menuOptions } from '@utils/consts';
import { useCallback, useEffect, useState } from 'react';
import { TFilterDate } from '../Calls';
import {
  changeDateFormatToStandart,
  getFormatedDate,
  getPastDate,
} from '@utils/functions';
import CalendarIcon from '@assets/icons/CalendarIcon';
import InputMask from 'react-input-mask';

interface CallsCalendarProps {
  filterDateHandler: React.Dispatch<React.SetStateAction<TFilterDate>>;
}

const inputMask = '__.__.__-__.__.__';

const CallsCalendar: React.FC<CallsCalendarProps> = ({ filterDateHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [title, setTitle] = useState<string>(menuOptions[0].title);
  const [id, setId] = useState<number | undefined>(menuOptions[0].id);
  const [date, setDate] = useState(inputMask);

  const findMenuOptionIndex = useCallback((id: number) => {
    const optionIndex = menuOptions.findIndex((i) => id === i.id);
    return optionIndex;
  }, []);

  // filter
  const changeFilterParameters = useCallback(
    (option: {
      title: string;
      num?: number;
      id?: number;
      beginDate?: Date;
      endDate?: Date;
    }) => {
      setTitle(option.title);
      setId(option.id);
      const date = new Date();
      filterDateHandler({
        begin: getFormatedDate(
          option.beginDate || getPastDate(date, option.num || 0),
        ),
        end: getFormatedDate(option.endDate || date),
      });
    },
    [filterDateHandler],
  );

  // left arrow click
  const handleLeftClick = useCallback(() => {
    setDate(inputMask);
    if (id === undefined) {
      changeFilterParameters(menuOptions[0]);
      return;
    }
    const optionIndex = findMenuOptionIndex(id);

    if (optionIndex !== -1) {
      let option = menuOptions[optionIndex - 1];

      if (!option) {
        option = menuOptions[menuOptions.length - 1];
      }
      changeFilterParameters(option);
    }
  }, [changeFilterParameters, findMenuOptionIndex, id]);

  // right arrow click
  const handleRightClick = useCallback(() => {
    setDate(inputMask);
    if (id === undefined) {
      changeFilterParameters(menuOptions[0]);
      return;
    }
    const optionIndex = findMenuOptionIndex(id);

    if (optionIndex !== -1) {
      let option = menuOptions[optionIndex + 1];

      if (!option) {
        option = menuOptions[0];
      }
      changeFilterParameters(option);
    }
  }, [changeFilterParameters, findMenuOptionIndex, id]);

  // center click
  const handleCenterClick = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // menu option click
  const handleMenuClick = useCallback(
    ({ id, newTitle, num }: IHandleMenuClick) => {
      if (num) {
        changeFilterParameters({
          id,
          title: newTitle,
          num: num,
        });
      }
      setIsMenuOpen(false);
    },
    [changeFilterParameters],
  );

  useEffect(() => {
    if (date && date.indexOf('_') === -1) {
      console.log(date);
      const splitedDate = date.split('-');
      changeFilterParameters({
        title: date,
        beginDate: new Date(changeDateFormatToStandart(splitedDate[0])),
        endDate: new Date(changeDateFormatToStandart(splitedDate[1])),
      });
      setIsMenuOpen(false);
    }
  }, [changeFilterParameters, date]);

  return (
    <div className='calls__calendar-container'>
      <Calendar
        text={title}
        onCenterClick={handleCenterClick}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
      <Menu
        className={`calls__menu${
          isMenuOpen ? '' : ' calls__menu_hidden'
        }`}
        list={menuOptions}
        id={0}
        onClick={handleMenuClick}>
        <label className='calls__date-input-label'>
          <h3 className='calls__date-input-title'>Указать даты:</h3>
          <div className='calls__date-input-container'>
            <InputMask
              className='calls__date-input'
              mask='99.99.99-99.99.99'
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
            />
            <CalendarIcon fill='calls__icon-fill' />
          </div>
        </label>
      </Menu>
    </div>
  );
};

export default CallsCalendar;
