import { AppThunk } from '@redux/store';
import { slice } from './slice';
import { ICallsResults } from '@interfaces/api';

export const { setCalls, setIsCallsFetching, setCallsTotalRow } = slice.actions;

// api
export const getCalls =
  ({
    dateStart,
    dateEnd,
    inOut,
  }: {
    dateStart: string;
    dateEnd: string;
    inOut?: '1' | '0';
  }): AppThunk =>
  (dispatch, _getState, api) => {
    dispatch(setIsCallsFetching(true));

    api
      .getCalls({ dateStart, dateEnd, inOut })
      .then((res) => {
        dispatch(setCalls(res.results));
        dispatch(setCallsTotalRow(res.total_rows));
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        dispatch(setIsCallsFetching(false));
      });
  };

export const getMoreCalls =
  ({
    dateStart,
    dateEnd,
    inOut,
    offset,
  }: {
    dateStart: string;
    dateEnd: string;
    offset: number;
    inOut?: '1' | '0';
  }): AppThunk =>
  (dispatch, getState, api) => {
    const calls = getState().page.calls;

    api
      .getCalls({ dateStart, dateEnd, inOut, offset })
      .then((res) => {
        dispatch(setCalls([...calls, ...res.results]));
      })
      .catch((error) => {
        console.log('error', error);
      })
  };

export const getCallAudio =
  ({
    record,
    partnershipId,
  }: {
    record: string;
    partnershipId: string;
  }): AppThunk =>
  (dispatch, getState, api) => {
    const calls = getState().page.calls;

    const pastCalls = [...calls];

    const call = { ...pastCalls.find((i) => String(i.id) === record) };

    if (call) {
      api
        .getCallAudio({
          record,
          partnershipId,
        })
        .then((res) => {
          if (res) {
            call.audio_url = URL.createObjectURL(res);
            const newCalls = pastCalls.map((i) => {
              if (String(i.id) === record) {
                return call;
              }
              return i;
            }) as ICallsResults[];
            dispatch(setCalls(newCalls));
          }
        })
        .catch((error) => {
          console.log('error', error);
        })
    }
  };
