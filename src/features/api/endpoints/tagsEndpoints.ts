import { TagDto } from '../../../components/api/types'
import { serviceApi } from '../serviceApi'

const tagsApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TagDto[], void>({
      query: () => 'tags'
    })
  })
})

export const { useGetTagsQuery } = tagsApi
