import { IHandleMenuClick, IMenuList } from '@interfaces/index';

interface MenuProps {
  list: IMenuList[];
  className: string;
  onClick: (o: IHandleMenuClick) => void;
  id?: number;
  children?: React.ReactElement;
}

const Menu: React.FC<MenuProps> = ({
  list,
  className,
  onClick,
  id,
  children,
}) => {
  return (
    <ul className={`menu ${className}`}>
      {list.map((i, mapId) => (
        <li key={mapId} className='menu__li'>
          <button
            className='menu__button'
            type='button'
            onClick={() => {
              onClick({
                id: id ? id : i.id ? i.id : 0,
                newTitle: i.title,
                arr: i.arr,
                num: i.num,
              });
            }}>
            {i.title}
          </button>
        </li>
      ))}
      {children && <li className='menu__li'>{children}</li>}
    </ul>
  );
};
export default Menu;
