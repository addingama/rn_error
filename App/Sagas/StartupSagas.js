import { put, select } from 'redux-saga/effects'
import StartupActions from '../Redux/StartupRedux'

export function * startup (api) {
  const user = yield select(state => state.auth.user)
  if (user !== null) {
    api.setHeader('apiKey', user.apiKey)
  }
  yield put(StartupActions.startupSuccess())
}
