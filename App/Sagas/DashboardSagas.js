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
import DashboardActions from '../Redux/DashboardRedux'
import { Alert } from 'react-native'

export function * getDashboard (api, action) {
  const response = yield call(api.dashboard)

  // success?
  if (response.ok) {
    const { error, message } = response.data
    if (!error) {
      yield put(DashboardActions.getDashboardSuccess(response.data))
    } else {
      yield put(DashboardActions.dashboardFailure())
      Alert.alert('Error', message)
    }
  } else {
    yield put(DashboardActions.dashboardFailure())
  }
}
