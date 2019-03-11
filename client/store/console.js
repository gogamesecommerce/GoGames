import axios from 'axios'
import {runInNewContext} from 'vm'

const GET_CONSOLES = 'GET_CONSOLES'
const GET_SINGLE_CONSOLE = 'GET_SINGLE_CONSOLE'

const initialState = {
  consoles: [],
  singleConsole: {}
}

const getConsoles = consoles => ({type: GET_CONSOLES, consoles})
const getSingleConsole = console => ({type: GET_SINGLE_CONSOLE, console})

export const getAllConsoles = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/consoles')
      const message = response.data
      const action = getConsoles(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchSingleConsole = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/consoles/${id}`)
      const message = response.data
      const action = getSingleConsole(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONSOLES:
      return {...state, consoles: action.consoles}
    case GET_SINGLE_CONSOLE:
      return {...state, singleConsole: action.console}
    default:
      return state
  }
}
