import { all } from 'redux-saga/effects'
import weatherSaga from './sagas/weather.saga'

// eslint-disable-next-line import/no-anonymous-default-export
export function* rootSaga() {
  yield all([weatherSaga()])
}
