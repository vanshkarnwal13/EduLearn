import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyC8u7RFwLkmrrnHKtWkItiXG5zY3ixckL0",
  authDomain: "edulearn-ee0c9.firebaseapp.com",
  projectId: "edulearn-ee0c9",
  storageBucket: "edulearn-ee0c9.appspot.com",
  messagingSenderId: "200856086619",
  appId: "1:200856086619:web:eefd1ce37d3717d678777e"
})
export const auth = app.auth()
export default app