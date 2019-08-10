import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['form'],
  loginSuccess: ['response'],
  loginFailure: ['response'],
  logout: []
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  posting: false,
  fetching: false,
  error: null
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  getUser: state => state.user
}

/* ------------- Reducers ------------- */

// request the data from an api
export const loginSuccess = (state, { response }) => {
  return state.merge({ posting: false, error: null, user: response })
}

// successful api lookup
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
  [Types.LOGIN_REQUEST]: postRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: postFailure,
  [Types.LOGOUT]: logout
})
