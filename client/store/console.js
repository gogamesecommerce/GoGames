import axios from 'axios'

const GET_CONSOLES = 'GET_CONSOLES'

const initialState = {
  consoles: []
}

const getConsoles = consoles => ({type: GET_CONSOLES, consoles})

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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONSOLES:
      return {...state, consoles: action.consoles}
    default:
      return state
  }
}
