import { RootState } from '@redux/store';

export const selectCalls = (state: RootState) => state.page.calls;
export const selectCallsTotalRow = (state: RootState) =>
  state.page.callsTotalRow;
export const selectIsCallsFetching = (state: RootState) =>
  state.page.isCallsFetching;
