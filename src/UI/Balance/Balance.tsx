import PlusButtonIcon from '@assets/icons/PlusButtonIcon';

interface BalanceProps {
  balance: string;
  className?: string;
}

const Balance: React.FC<BalanceProps> = ({ balance, className }) => {
  return (
    <div className={`balance${className ? ' ' + className : ''}`}>
      <p className='balance__text'>
        Баланс: <span className='balance__span'>{balance}</span>
      </p>
      <button className='balance__button' type='button'>
        <PlusButtonIcon fill='balance__button-icon-fill' />
      </button>
    </div>
  );
};

export default Balance;
