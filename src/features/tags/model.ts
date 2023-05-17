import { TagDto } from '../../components/api/types'

export type TagsState = {
  tags: TagDto[]
  selectedTag: string | null
}
