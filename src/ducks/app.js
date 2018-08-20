import { createAction, createReducer } from 'redux-act'
import { push } from 'react-router-redux'
import { pendingTask, begin, end } from 'react-redux-spinner'
import { notification } from 'antd'
import { auth, db } from '../firebase'

const REDUCER = 'app'
const NS = `@@${REDUCER}/`

const _setFrom = createAction(`${NS}SET_FROM`)
const _setLoading = createAction(`${NS}SET_LOADING`)
const _setHideLogin = createAction(`${NS}SET_HIDE_LOGIN`)

export const setUserState = createAction(`${NS}SET_USER_STATE`)
export const setUpdatingContent = createAction(`${NS}SET_UPDATING_CONTENT`)
export const setActiveDialog = createAction(`${NS}SET_ACTIVE_DIALOG`)
export const deleteDialogForm = createAction(`${NS}DELETE_DIALOG_FORM`)
export const addSubmitForm = createAction(`${NS}ADD_SUBMIT_FORM`)
export const deleteSubmitForm = createAction(`${NS}DELETE_SUBMIT_FORM`)
export const setLayoutState = createAction(`${NS}SET_LAYOUT_STATE`)

export const setLoading = isLoading => {
  const action = _setLoading(isLoading)
  action[pendingTask] = isLoading ? begin : end
  return action
}

export const resetHideLogin = () => (dispatch, getState) => {
  const state = getState()
  if (state.pendingTasks === 0 && state.app.isHideLogin) {
    dispatch(_setHideLogin(false))
  }
  return Promise.resolve()
}

export const initAuth = roles => (dispatch, getState) => {
  // Use Axios there to get User Data by Auth Token with Bearer Method Authentication
  console.log('Init auth called', roles)

  const userRole = window.localStorage.getItem('app.Role')
  const state = getState()

  const users = {
    administrator: {
      email: 'admin@rhinorea.com',
      role: 'administrator',
    },
    agent: {
      email: 'agent@rhinorea.com',
      role: 'agent',
    },
  }

  const setUser = userState => {
    dispatch(
      setUserState({
        userState: {
          ...userState,
        },
      }),
    )
    if (!roles.find(role => role === userRole)) {
      if (!(state.routing.location.pathname === '/dashboard/home')) {
        dispatch(push('/dashboard/home'))
      }
      return Promise.resolve(false)
    }
    return Promise.resolve(true)
  }

  switch (userRole) {
    case 'administrator':
      return setUser(users.administrator, userRole)

    case 'agent':
      return setUser(users.agent, userRole)

    default:
      const location = state.routing.location
      const from = location.pathname + location.search

      if (from === '/register') {
        dispatch(push('/register'))
      } else {
        dispatch(push('/login'))
        dispatch(_setFrom(from))
      }

      return Promise.reject()
  }
}

export async function login(username, password, dispatch) {
  //firebase login
  let status = false

  await auth
    .doSignInWithEmailAndPassword(username, password)
    .then(payload => {
      window.localStorage.setItem('app.Authorization', payload.user.uid)
      window.localStorage.setItem('app.Role', 'administrator')
      dispatch(_setHideLogin(true))
      dispatch(push('/dashboard/home'))
      notification.open({
        type: 'success',
        message: 'You have successfully logged in!',
        description:
          'Welcome to Rhino Premium. Please be patient as we continue the devlopment of the our new web application.',
      })
      status = true
    })
    .catch(error => {
      console.log(error)
      dispatch(push('/login'))
      dispatch(_setFrom(''))
    })

  return status
}

export async function register(email, password, username, dispatch) {
  let status = false

  await auth
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log('authUser', authUser, username, email)
      window.localStorage.setItem('app.Authorization', authUser.user.uid)
      window.localStorage.setItem('app.Role', 'administrator')
      db.doCreateUser(authUser.user.uid, username, email)
        .then(() => {
          dispatch(push('/dashboard/home'))
          notification.open({
            type: 'success',
            message: 'You have successfully registered!',
            description:
              'Welcome to Rhino Premium. Please be patient as we continue the devlopment of the our new web application.',
          })
          status = true
        })
        .catch(error => {
          console.log('error', error.message)
          dispatch(push('/register'))
          dispatch(_setFrom(''))
        })
    })
    .catch(error => {
      console.log('error', error.message)
    })

  return status
}

export async function loginWithGoogle(dispatch) {
  //Google Sign in
  let status = false

  await auth
    .doSignInWithGoogle()
    .then(payload => {
      window.localStorage.setItem('app.Authorization', payload.user.uid)
      window.localStorage.setItem('app.Role', 'administrator')
      dispatch(_setHideLogin(true))
      dispatch(push('/dashboard/home'))
      notification.open({
        type: 'success',
        message: 'You have successfully logged in!',
        description:
          'Welcome to Rhino Premium. Please be patient as we continue the devlopment of the our new web application.',
      })
      status = true
    })
    .catch(error => {
      console.log(error)
      dispatch(push('/login'))
      dispatch(_setFrom(''))
    })

  return status
}

export const logout = () => (dispatch, getState) => {
  dispatch(
    setUserState({
      userState: {
        email: '',
        role: '',
      },
    }),
  )
  window.localStorage.setItem('app.Authorization', '')
  window.localStorage.setItem('app.Role', '')

  auth.doSignOut().then(() => console.log('Log out success'))

  dispatch(push('/login'))
}

export const gotoRegister = dispatch => {
  dispatch(push('/register'))
}

export const gotoSignIn = dispatch => {
  dispatch(push('/login'))
}

export const gotoForgetPassword = dispatch => {
  dispatch(push('/forgetPassword'))
}

export async function resetPassword(email, dispatch) {
  let status = false
  await auth
    .doPasswordReset(email)
    .then(() => {
      console.log('reset password success')
      dispatch(push('/login'))
      status = true
    })
    .catch(() => {
      console.log('reset failed')
    })

  return status
}

const initialState = {
  // APP STATE
  from: '',
  isUpdatingContent: false,
  isLoading: false,
  activeDialog: '',
  dialogForms: {},
  submitForms: {},
  isHideLogin: false,

  // LAYOUT STATE
  layoutState: {
    isMenuTop: false,
    menuMobileOpened: false,
    menuCollapsed: false,
    menuShadow: true,
    themeLight: false,
    squaredBorders: false,
    borderLess: false,
    fixedWidth: false,
    settingsOpened: false,
  },

  // USER STATE
  userState: {
    email: '',
    role: '',
  },
}

export default createReducer(
  {
    [_setFrom]: (state, from) => ({ ...state, from }),
    [_setLoading]: (state, isLoading) => ({ ...state, isLoading }),
    [_setHideLogin]: (state, isHideLogin) => ({ ...state, isHideLogin }),
    [setUpdatingContent]: (state, isUpdatingContent) => ({ ...state, isUpdatingContent }),
    [setUserState]: (state, { userState }) => ({ ...state, userState }),
    [setLayoutState]: (state, param) => {
      const layoutState = { ...state.layoutState, ...param }
      const newState = { ...state, layoutState }
      window.localStorage.setItem('app.layoutState', JSON.stringify(newState.layoutState))
      return newState
    },
    [setActiveDialog]: (state, activeDialog) => {
      const result = { ...state, activeDialog }
      if (activeDialog !== '') {
        const id = activeDialog
        result.dialogForms = { ...state.dialogForms, [id]: true }
      }
      return result
    },
    [deleteDialogForm]: (state, id) => {
      const dialogForms = { ...state.dialogForms }
      delete dialogForms[id]
      return { ...state, dialogForms }
    },
    [addSubmitForm]: (state, id) => {
      const submitForms = { ...state.submitForms, [id]: true }
      return { ...state, submitForms }
    },
    [deleteSubmitForm]: (state, id) => {
      const submitForms = { ...state.submitForms }
      delete submitForms[id]
      return { ...state, submitForms }
    },
  },
  initialState,
)
