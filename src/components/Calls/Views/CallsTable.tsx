import Checkbox from '@UI/Checkbox/Checkbox';
import Preloader from '@UI/Preloader/Preloader';
import CallsArrowIcon from '@assets/icons/Calls/CallsArrowIcon';
import CallsFromSiteIcon from '@assets/icons/Calls/CallsFromSiteIcon';
import { ICallsResults } from '@interfaces/api';
import { getCallAudio } from '@redux/page/actions';
import { selectCallsTotalRow } from '@redux/page/selectors';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { formatTime } from '@utils/functions';
import InfiniteScroll from 'react-infinite-scroll-component';

interface CallsTableProps {
  getMore: () => void;
  dataLength: number;
  filteredCalls: ICallsResults[];
}

const CallsTable: React.FC<CallsTableProps> = ({
  getMore,
  dataLength,
  filteredCalls,
}) => {
  const totalRow = useAppSelector(selectCallsTotalRow);
  const dispatch = useAppDispatch();

  return (
    <>
      <InfiniteScroll
        next={getMore}
        dataLength={dataLength}
        hasMore={dataLength < Number(totalRow)}
        loader={<Preloader />}>
        <div className='calls__table-row calls__table-row_headers'>
          <div className='calls__checkbox-container'>
            <Checkbox
              inputClassName='calls__checkbox-input'
              spanClassName='calls__checkbox-span'
            />
          </div>
          <div className='calls__grid calls__grid_no-border calls__grid_small'>
            <h3 className='calls__table-title'>Тип</h3>
            <h3 className='calls__table-title'>Время</h3>
            <h3 className='calls__table-title'>Сотрудник</h3>
            <h3 className='calls__table-title'>Звонок</h3>
            <h3 className='calls__table-title'>Источник</h3>
            <h3 className='calls__table-title'>Оценка</h3>
            <h3 className='calls__table-title calls__table-title_end'>
              Длительность
            </h3>
          </div>
        </div>
        {filteredCalls.map((i, id) => (
          <div className='calls__table-row' key={id}>
            <div className='calls__checkbox-container'>
              <Checkbox
                inputClassName='calls__checkbox-input'
                spanClassName='calls__checkbox-span'
              />
            </div>
            <div className='calls__grid'>
              <CallsArrowIcon
                className={`calls__type-icon${
                  i.in_out === 1 ? ' calls__type-icon_rotate' : ''
                }`}
                fill={`calls__type-icon-fill${
                  i.status === 'Дозвонился'
                    ? i.in_out === 1
                      ? ' calls__type-icon-fill_green'
                      : ' calls__type-icon-fill_blue'
                    : ' calls__type-icon-fill_red'
                }`}
              />
              <p className='calls__table-text'>
                {i.date.split(' ')[1].slice(0, 5)}
              </p>
              <div className='calls__table-avatar-container'>
                <img
                  className='calls__table-avatar'
                  src={i.person_avatar}
                  alt='avatar'
                />
                {i.from_site === 0 && (
                  <CallsFromSiteIcon
                    className='calls__table-site-icon'
                    fill='calls__icon-fill'
                  />
                )}
              </div>
              <p className='calls__table-text'>{i.to_number}</p>
              <p className='calls__table-text'>{i.source}</p>
              {i.errors.length > 0 ? (
                <p className='calls__table-text calls__table-text_red'>
                  {i.errors[0]}
                </p>
              ) : (
                <p />
              )}
              <div
                className='calls__table-duration'
                onMouseEnter={() => {
                  dispatch(
                    getCallAudio({
                      record: String(i.id),
                      partnershipId: i.partnership_id,
                    }),
                  );
                }}>
                {i.audio_url && (
                  <audio
                    className='calls__table-audio'
                    controls
                    src={i.audio_url}
                  />
                )}
                <p className='calls__table-text calls__table-text_end'>
                  {formatTime(i.time)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default CallsTable;
