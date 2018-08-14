import { createReducer } from 'redux-act'
import * as app from './app'
import { message } from 'antd'

export const REDUCER = 'forgetPassword'

export const submit = ({ email }: { email: string }) => (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(app.addSubmitForm(REDUCER))
  const isSuccess = app.resetPassword(email, dispatch)
  dispatch(app.deleteSubmitForm(REDUCER))

  if (!isSuccess) {
    message.error('Sorry, something went wrong!')
  }
}

const initialState = {}
export default createReducer({}, initialState)
