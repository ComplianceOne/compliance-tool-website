import { combineReducers } from '@reduxjs/toolkit';
import headerReducer from './slices/header-slice';
import modalReducer from './slices/modal-slice';

const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
