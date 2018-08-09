import { createReducer } from 'redux-act'
import * as app from './app'
import { message } from 'antd'

export const REDUCER = 'login'

export const submit = ({ username, password }: { username: string, password: string }) => (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(app.addSubmitForm(REDUCER))
  const isLoggined = app.login(username, password, dispatch)
  dispatch(app.deleteSubmitForm(REDUCER))

  if (!isLoggined) {
    message.error('Invalid username or password')
  }
}

export const submitWithGoogle = (dispatch: Function) => {
  dispatch(app.addSubmitForm(REDUCER))
  const isLoggined = app.loginWithGoogle(dispatch)
  dispatch(app.deleteSubmitForm(REDUCER))

  if (!isLoggined) {
    message.error('Something went wrong with Google Authentication')
  }
}

const initialState = {}
export default createReducer({}, initialState)
