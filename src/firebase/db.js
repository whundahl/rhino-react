import { db } from './firebase'

// User API

export const doCreateUser = (id, usename, email) =>
  db.ref('user/${id}').set({
    usename,
    email,
  })

export const onceGetUsers = () => db.ref('users').once('value')

//Other db APIs
