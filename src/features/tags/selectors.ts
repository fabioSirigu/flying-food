import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const selectTagsState = (state: RootState) => state.tags

export const selectSelectedTagId = createSelector(
  selectTagsState,
  (productState) => productState.selectedTag
)

export const selectTags = createSelector(
  selectTagsState,
  (productState) => productState.tags
)
