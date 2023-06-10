interface ProgressBarProps {
  text: string;
  color: 'red' | 'green' | 'yellow';
  spanText: string;
  persentage: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  text,
  color,
  spanText,
  persentage,
}) => {
  return (
    <div className='calls-pb'>
      <p className='calls-pb__text'>
        {text}{' '}
        <span
          className={`calls-pb__span${
            color === 'green'
              ? ' calls-pb__span_green'
              : color === 'red'
              ? ' calls-pb__span_red'
              : ' calls-pb__span_yellow'
          }`}>
          {spanText}
        </span>
      </p>
      <div className='calls-pb__progress-container'>
        <span
          className={`calls-pb__progress${
            color === 'green'
              ? ' calls-pb__progress_green'
              : color === 'red'
              ? ' calls-pb__progress_red'
              : ' calls-pb__progress_yellow'
          }`}
          style={{ width: persentage }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
