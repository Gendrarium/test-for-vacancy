import ProgressBar from '@UI/ProgressBar/ProgressBar';
import ArrowDownIcon from '@assets/icons/ArrowDownIcon';
import SearchIcon from '@assets/icons/SearchIcon';
import { getLocaleDate } from '@utils/functions';
import avatar from '@assets/images/avatar.png';
import avatar2x from '@assets/images/avatar-2x.png';

const progressArray: {
  color: 'green' | 'yellow' | 'red';
  text: string;
  spanText: string;
  persentage: string;
}[] = [
  {
    color: 'green',
    text: 'Новые звонки',
    spanText: '20 из 30 шт',
    persentage: '66%',
  },
  {
    color: 'yellow',
    text: 'Качество разговоров',
    spanText: '40%',
    persentage: '40%',
  },
  {
    color: 'red',
    text: 'Конверсия в заказ',
    spanText: '67%',
    persentage: '67%',
  },
];

const CallsHeader = () => {
  return (
    <header className='calls__header'>
      <div className='calls__header-full'>
        <p className='calls__header-text'>{getLocaleDate()}</p>
        <div className='calls__progress-bars-container'>
          {progressArray.map((i, id) => (
            <ProgressBar
              key={id}
              color={i.color}
              text={i.text}
              spanText={i.spanText}
              persentage={i.persentage}
            />
          ))}
        </div>
        <div className='calls__header-search-container'>
          <SearchIcon fill='calls__icon-fill' />
        </div>
        <button className='calls__organization-container' type='button'>
          <p className='calls__header-text calls__header-text_with-margin'>
            ИП Сидорова Александра Михайловна
          </p>
          <ArrowDownIcon fill='calls__icon-fill' />
        </button>
        <button className='calls__avatar-container' type='button'>
          <img
            className='calls__avatar'
            src={avatar}
            alt='avatar'
            srcSet={`${avatar} 1x, ${avatar2x} 2x`}
          />
          <ArrowDownIcon fill='calls__icon-fill' />
        </button>
      </div>
    </header>
  );
};

export default CallsHeader;
