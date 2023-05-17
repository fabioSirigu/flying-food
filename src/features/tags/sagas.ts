import { call, put, takeLatest } from 'redux-saga/effects'
import { getTags } from '../../components/api'
import { TagDto } from '../../components/api/types'
import { tagActions as a } from './reducer'

function* fetchTagsSaga() {
  try {
    const tagsProduct: TagDto[] = yield call(getTags)

    yield put(a.fetchTagsTagsSuccess(tagsProduct))
  } catch (error) {
    console.log((error as Error).message)
  }
}

export function* tagsSaga() {
  yield takeLatest(a.fetchTags.toString(), fetchTagsSaga)
}
