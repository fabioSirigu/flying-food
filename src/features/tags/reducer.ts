import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TagDto } from '../../components/api/types'
import { TagsState } from './model'

const initialState: TagsState = {
  tags: [],
  selectedTag: null
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    fetchTagsTagsSuccess: (state, { payload }: PayloadAction<TagDto[]>) => {
      state.tags = payload
    },
    selectedTags: (state, { payload }: PayloadAction<string>) => {
      state.selectedTag = payload
    }
  }
})

export const tagActions = {
  ...tagsSlice.actions,
  fetchTags: createAction('tags/fetchTags'),
  fetchFilteredTags: createAction('tags/fetchFilteredTags')
}

export default tagsSlice.reducer
