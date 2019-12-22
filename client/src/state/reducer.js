import { SET_NAME, SOCKET_CONNECT, SOCKET_DISCONNECT, SET_TOAST, REMOVE_TOAST } from './variables'
import io from 'socket.io-client'
const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:8000'

export const initialState = {
  name: localStorage.getItem('name') ? localStorage.getItem('name') : null,
  socket: null,
  toast: {
    toast: false
  }
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

    case SET_TOAST:
      return {
        ...state,
        toast: {
          toast: true,
          message: action.message,
          variant: action.variant
        }
      }
    case REMOVE_TOAST:
      return {
        ...state,
        toast: {
          toast: false
        }
      }

    default:
      return state
  }
}
