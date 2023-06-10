import { NavLink, useLocation } from 'react-router-dom';

import NavOrdersIcon from '@assets/icons/NavPanel/NavOrdersIcon';
import NavCallsIcon from '@assets/icons/NavPanel/NavCallsIcon';
import NavCounterpartiesIcon from '@assets/icons/NavPanel/NavCounterpartiesIcon';
import NavDocsIcon from '@assets/icons/NavPanel/NavDocsIcon';
import NavPerformersIcon from '@assets/icons/NavPanel/NavPerformersIcon';
import NavReportsIcon from '@assets/icons/NavPanel/NavReportsIcon';
import NavKnowledgeBaseIcon from '@assets/icons/NavPanel/NavKnowledgeBaseIcon';
import NavSettingsIcon from '@assets/icons/NavPanel/NavSettingsIcon';
import NavMessagesIcon from '@assets/icons/NavPanel/NavMessagesIcon';
import NavResultsIcon from '@assets/icons/NavPanel/NavResultsIcon';

const navigationArray = [
  { to: '/results', title: 'Итоги', icon: NavResultsIcon },
  { to: '/orders', title: 'Заказы', icon: NavOrdersIcon },
  { to: '/messages', title: 'Сообщения', icon: NavMessagesIcon },
  { to: '/calls', title: 'Звонки', icon: NavCallsIcon },
  { to: '/counterparties', title: 'Контрагенты', icon: NavCounterpartiesIcon },
  { to: '/docs', title: 'Документы', icon: NavDocsIcon },
  { to: '/performers', title: 'Исполнители', icon: NavPerformersIcon },
  { to: '/reports', title: 'Отчеты', icon: NavReportsIcon },
  { to: '/knowledge-base', title: 'База знаний', icon: NavKnowledgeBaseIcon },
  { to: '/settings', title: 'Настройки', icon: NavSettingsIcon },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className='navigation__nav'>
      <ul className='navigation__ul'>
        {navigationArray.map(({ to, title, icon: Icon }, id) => (
          <li className='navigation__li' key={id}>
            <NavLink
              to={to}
              className={({ isActive, isPending }) =>
                'navigation__link' +
                (isActive && !isPending ? ' navigation__link_active' : '') +
                // later replaced by normal checking
                (to === '/calls' ? ' navigation__link_new' : '')
              }
              end>
              <div className='navigation__icon-container'>
                <Icon
                  className='navigation__icon'
                  fill={`navigation__icon-fill${
                    location.pathname === to
                      ? ' navigation__icon-fill_active'
                      : ''
                  }`}
                />
              </div>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
