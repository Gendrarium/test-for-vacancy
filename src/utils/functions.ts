export const getLocaleDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };
  const dateString = date.toLocaleString('ru-ru', options);
  return (
    dateString[0].toUpperCase() + dateString.slice(1, dateString.length - 1)
  );
};

export const getFormatedDate = (date: Date) => {
  return date
    .toLocaleString('ru-ru')
    .split(',')[0]
    .split('.')
    .reverse()
    .join('-');
};

export const getPastDate = (date: Date, numOfDays: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - numOfDays);
  return newDate;
};

export const formatTime = (time: number) => {
  let hours: string | number = Math.floor(time / 3600);
  let minutes: string | number = Math.floor((time - hours * 3600) / 60);
  let seconds: string | number = time - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours === '00'
    ? minutes + ':' + seconds
    : hours + ':' + minutes + ':' + seconds;
};

export const changeDateFormatToStandart = (date: string) => {
  const reversedArr = date.split('.').reverse();
  reversedArr[0] = '20' + reversedArr[0];
  return reversedArr.join('-');
};
