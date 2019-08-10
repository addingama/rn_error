import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDashboard: null,
  getDashboardSuccess: ['response'],
  dashboardFailure: null,
  logout: null
})

export const DashboardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  error: null
})

/* ------------- Selectors ------------- */

export const DashboardSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const getDashboardSuccess = (state, { response }) => state.merge({ fetching: false, error: null, data: response })
export const logout = (state) => INITIAL_STATE

// standard
export const request = (state) => state.merge({ fetching: true })
export const postRequest = (state) => state.merge({ posting: true })
export const success = state => state.merge({ fetching: false, error: null })
export const postSuccess = state => state.merge({ posting: false, error: false })
export const failure = state => state.merge({ fetching: false, error: true })
export const postFailure = state => state.merge({ posting: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DASHBOARD]: request,
  [Types.GET_DASHBOARD_SUCCESS]: getDashboardSuccess,
  [Types.DASHBOARD_FAILURE]: failure,
  [Types.LOGOUT]: logout
})
