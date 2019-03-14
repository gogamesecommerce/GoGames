import axios from 'axios'

const GET_ACCESSORIES = 'GET_ACCESSORIES'

const initialState = {
  accessories: []
}

const getAccessories = accessories => ({type: GET_ACCESSORIES, accessories})

export const fetchAccessories = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/accessory')
      const message = response.data
      const action = getAccessories(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESSORIES:
      return {...state, accessories: action.accessories}
    default:
      return state
  }
}
