import { ICallsResults } from '@interfaces/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStateUser {
  calls: ICallsResults[];
  callsTotalRow: string;
  isCallsFetching: boolean;
}

const initialState: IStateUser = {
  calls: [],
  callsTotalRow: '',
  isCallsFetching: true,
};

// create a slice
export const slice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCalls: (state, action: PayloadAction<ICallsResults[]>) => {
      state.calls = action.payload;
    },
    setCallsTotalRow: (state, action: PayloadAction<string>) => {
      state.callsTotalRow = action.payload;
    },
    setIsCallsFetching: (state, action: PayloadAction<boolean>) => {
      state.isCallsFetching = action.payload;
    },
  },
});

export default slice.reducer;
