import { memo } from 'react';
import Nav from './Views/Nav';
import LogoIcon from '@assets/icons/Logo/LogoIcon';
import Button from '@UI/Button/Button';
import ButtonPlusIcon from '@assets/icons/Button/ButtonPlusIcon';
import ButtonExclamationIcon from '@assets/icons/Button/ButtonExclamationIcon';

const NavigatePanel = memo(() => {
  return (
    <div className='navigation'>
      <header className='navigation__header'>
        <LogoIcon />
      </header>
      <main className='navigation__main'>
        <Nav />
        <div className='navigation__buttons-container'>
          <Button className='navigation__button' title='Добавить заказ'>
            <ButtonPlusIcon fill='navigation__button-icon-fill' />
          </Button>
          <Button className='navigation__button' title='Оплата'>
            <ButtonExclamationIcon fill='navigation__button-icon-fill' />
          </Button>
        </div>
      </main>
    </div>
  );
});

export default NavigatePanel;
