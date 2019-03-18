import axios from 'axios'

const GET_ACCESSORIES = 'GET_ACCESSORIES'
const GET_SINGLE_ACCESSORY = 'GET_SINGLE_ACCESSORY'

const initialState = {
  accessories: [],
  singleAccessory: {}
}

const getAccessories = accessories => ({type: GET_ACCESSORIES, accessories})
const getSingleAccessory = accessory => ({
  type: GET_SINGLE_ACCESSORY,
  accessory
})

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

export const fetchSingleAccessory = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/accessory/${id}`)
      const message = response.data
      const action = getSingleAccessory(message)
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
    case GET_SINGLE_ACCESSORY:
      return {...state, singleAccessory: action.accessory}
    default:
      return state
  }
}
