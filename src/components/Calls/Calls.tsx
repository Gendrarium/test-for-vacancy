import Balance from '@UI/Balance/Balance';
import CallsHeader from './Views/CallsHeader';
import { useEffect, useState } from 'react';
import SearchIcon from '@assets/icons/SearchIcon';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { selectCalls, selectIsCallsFetching } from '@redux/page/selectors';
import { getCalls, getMoreCalls } from '@redux/page/actions';
import { getFormatedDate, getPastDate } from '@utils/functions';
import { ICallsResults } from '@interfaces/api';
import CallsFilters from './Views/CallsFilters';
import CallsCalendar from './Views/CallsCalendar';
import { menuOptions } from '@utils/consts';
import CallsTable from './Views/CallsTable';
import Preloader from '@UI/Preloader/Preloader';

export type TFilterDate = {
  begin: string;
  end: string;
};

export type TFilters = {
  callsType: string;
};

const Calls = () => {
  const date = new Date();
  const [filterDate, setFilterDate] = useState<TFilterDate>({
    begin: getFormatedDate(getPastDate(date, menuOptions[0].num)),
    end: getFormatedDate(date),
  });
  const [filters, setFilters] = useState<TFilters>({
    callsType: '',
  });
  const [filteredCalls, setFilteredCalls] = useState<ICallsResults[]>([]);
  const calls = useAppSelector(selectCalls);
  const isFetching = useAppSelector(selectIsCallsFetching);
  const dispatch = useAppDispatch();

  // get calls
  useEffect(() => {
    dispatch(
      getCalls({ dateStart: filterDate.begin, dateEnd: filterDate.end }),
    );
  }, [dispatch, filterDate.begin, filterDate.end]);

  // filter calls
  useEffect(() => {
    let pastCalls = [...calls];
    if (filters.callsType !== '') {
      pastCalls = pastCalls.filter(
        (i) => i.in_out === Number(filters.callsType),
      );
    }

    const filtered = pastCalls.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date),
    );

    setFilteredCalls(filtered);
  }, [calls, filters]);

  const handleGetMore = () => {
    dispatch(
      getMoreCalls({
        dateStart: filterDate.begin,
        dateEnd: filterDate.end,
        offset: calls.length,
      }),
    );
  };

  return (
    <div className='calls'>
      <CallsHeader />
      <main className='calls__main'>
        <div className='calls__full-container'>
          <section className='calls__information'>
            <Balance balance='272 &#8381;' className='calls__balance' />
            <CallsCalendar filterDateHandler={setFilterDate} />
          </section>
          <section className='calls__filters-container'>
            <div className='calls__search-container'>
              <SearchIcon fill='calls__icon-fill' />
              <input
                className='calls__search-input'
                placeholder='Поиск по звонкам'
              />
            </div>
            <CallsFilters filterHandler={setFilters} />
          </section>
          {isFetching ? (
            <Preloader />
          ) : (
            <section className='calls__content'>
              <div className='calls__content-full-container'>
                <CallsTable
                  getMore={handleGetMore}
                  filteredCalls={filteredCalls}
                  dataLength={calls.length}
                />
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Calls;
