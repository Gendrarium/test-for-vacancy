import Menu from '@UI/Menu/Menu';
import ArrowDownIcon from '@assets/icons/ArrowDownIcon';
import { TFilters } from '../Calls';
import { useCallback, useState } from 'react';
import { IHandleMenuClick, IMenuList } from '@interfaces/index';

interface CallsFiltersProps {
  filterHandler: React.Dispatch<React.SetStateAction<TFilters>>;
}

type TableHeadersItem = {
  title: string;
  id: number;
  isOpen: boolean;
  newTitle?: string;
  menuList?: IMenuList[];
};

const tableHeadersInitial: TableHeadersItem[] = [
  {
    title: 'Все типы',
    isOpen: false,
    menuList: [
      {
        title: 'Все типы',
        arr: [{ key: 'callsType', value: '' }],
      },
      {
        title: 'Входящие',
        arr: [{ key: 'callsType', value: '1' }],
      },
      {
        title: 'Исходящие',
        arr: [{ key: 'callsType', value: '0' }],
      },
    ],
    id: 0,
  },
  { title: 'Все сотрудники', isOpen: false, id: 1 },
  { title: 'Все звонки', isOpen: false, id: 2 },
  { title: 'Все источники', isOpen: false, id: 3 },
  { title: 'Все оценки', isOpen: false, id: 4 },
  { title: 'Все ошибки', isOpen: false, id: 5 },
];

const CallsFilters: React.FC<CallsFiltersProps> = ({ filterHandler }) => {
  const [tableHeaders, setTableHeaders] =
    useState<TableHeadersItem[]>(tableHeadersInitial);

  const changeHeader = useCallback((id: number, newTitle: string) => {
    setTableHeaders((prev) => {
      const newHeaders = [...prev];
      const filter = newHeaders.find((f) => id === f.id);

      if (filter) {
        if (filter.title !== newTitle) {
          filter.newTitle = newTitle;
        } else {
          filter.newTitle = undefined;
        }
        filter.isOpen = false;
      }
      return newHeaders;
    });
  }, []);

  const handleMenuClick = useCallback(
    ({ id, arr, newTitle }: IHandleMenuClick) => {
      changeHeader(id, newTitle);
      filterHandler((prev) => {
        const newFilter: { [index: string]: string } = {};
        if (arr) {
          arr.forEach((i) => {
            newFilter[i.key] = i.value;
          });
        }
        return {
          ...prev,
          ...newFilter,
        };
      });
    },
    [changeHeader, filterHandler],
  );

  const handleOpenMenu = useCallback((id: number) => {
    setTableHeaders((prev) => {
      const newHeaders = [...prev];
      const filter = newHeaders.find((f) => id === f.id);
      if (filter) {
        filter.isOpen = !filter.isOpen;
      }
      return newHeaders;
    });
  }, []);

  return (
    <ul className='calls__filters-list'>
      {tableHeaders.map((i) => (
        <li className='calls__filters-item' key={i.id}>
          <button
            className='calls__filters-button'
            type='button'
            onClick={
              i.menuList
                ? () => {
                    handleOpenMenu(i.id);
                  }
                : undefined
            }>
            <span
              className={`calls__filters-span${
                i.newTitle ? ' calls__filters-span_active' : ''
              }`}>
              {i.newTitle ? i.newTitle : i.title}
            </span>
            <ArrowDownIcon
              className={`calls__arrow-icon${
                i.isOpen ? ' calls__arrow-icon_up' : ''
              }`}
              fill={`calls__icon-fill${
                i.isOpen ? ' calls__icon-fill_active' : ''
              }`}
            />
          </button>
          {i.menuList && (
            <Menu
              className={`calls__menu calls__menu_left${i.isOpen ? '' : ' calls__menu_hidden'}`}
              list={i.menuList}
              onClick={handleMenuClick}
              id={i.id}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CallsFilters;
