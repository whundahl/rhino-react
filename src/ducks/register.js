import { createReducer } from 'redux-act'
import * as app from './app'
import { message } from 'antd'

export const REDUCER = 'register'

export const submit = ({
  email,
  password,
  username,
}: {
  email: string,
  password: string,
  username: string,
}) => (dispatch: Function, getState: Function) => {
  dispatch(app.addSubmitForm(REDUCER))
  const isSuccess = app.register(email, password, username, dispatch)
  dispatch(app.deleteSubmitForm(REDUCER))

  if (!isSuccess) {
    message.error('Sorry, something went wrong!')
  }
}

const initialState = {}
export default createReducer({}, initialState)
