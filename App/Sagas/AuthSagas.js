/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'
import { Alert } from 'react-native'
// import { AuthSelectors } from '../Redux/AuthRedux'

export function * login (api, { form }) {
  const response = yield call(api.login, form)

  if (response.ok) {
    const { error, message, user } = response.data
    if (!error) {
      yield put(AuthActions.loginSuccess(user))
      api.setHeader('apiKey', user.apiKey)
    } else {
      yield put(AuthActions.loginFailure())
      Alert.alert('Error', message)
    }
  } else {
    yield put(AuthActions.loginFailure())
  }
}
