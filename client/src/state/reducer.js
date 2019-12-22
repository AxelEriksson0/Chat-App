import { SET_NAME, SOCKET_CONNECT, SOCKET_DISCONNECT } from './variables'
import io from 'socket.io-client'
const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:8000'

export const initialState = {
  socket: null,
  name: localStorage.getItem('name') ? localStorage.getItem('name') : null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      }
    case SOCKET_CONNECT:
      return {
        ...state,
        socket: io(url)
      }
    case SOCKET_DISCONNECT:
      state.socket.disconnect()
      return {
        ...state,
        socket: null
      }
    default:
      return state
  }
}
