import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';
import { IGlobalReducer } from './types';

export const selectIsShowMenu = createSelector(
  (state: AppState) => state.global,
  (global: IGlobalReducer) => global.isShowMenu
);
