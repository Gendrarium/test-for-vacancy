import type { ICalls } from '@interfaces/api';

const BASE_URL: string = import.meta.env.VITE_API_URL;
const TOKEN: string = import.meta.env.VITE_API_TOKEN;

export const getCalls = ({
  dateStart,
  dateEnd,
  inOut,
  offset,
}: {
  dateStart: string;
  dateEnd: string;
  inOut?: '0' | '1';
  offset?: number;
}): Promise<ICalls> => {
  return fetch(
    `${BASE_URL}/getList?date_start=${dateStart}&date_end=${dateEnd}${
      inOut ? '&in_out=' + inOut : ''
    }${offset ? '&offset=' + offset : ''}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  )
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Ошибка');
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getCallAudio = ({
  record,
  partnershipId,
}: {
  record: string;
  partnershipId: string;
}) => {
  console.log(record, partnershipId);
  return fetch(
    'http://localhost:5000/signup',
    // `${BASE_URL}/getRecord?record=${record}&partnership_id=${partnershipId}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': 'filename="record.mp3"',
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  )
    .then((res) => {
      if (res.status === 200) {
        return res.blob();
      } else {
        throw new Error('Ошибка');
      }
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
