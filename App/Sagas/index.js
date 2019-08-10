import {all, takeLatest} from 'redux-saga/effects'

import DebugConfig from '../Config/DebugConfig'
import {AuthTypes} from '../Redux/AuthRedux'
import {DashboardTypes} from '../Redux/DashboardRedux'
/* ------------- Types ------------- */

import {StartupTypes} from '../Redux/StartupRedux'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'

import {login} from './AuthSagas'
import {getDashboard} from './DashboardSagas'

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),

    // auth
    takeLatest(AuthTypes.LOGIN_REQUEST, login, api),

    // dashboard
    takeLatest(DashboardTypes.GET_DASHBOARD, getDashboard, api)
  ])
}
