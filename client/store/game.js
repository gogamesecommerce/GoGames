import axios from 'axios'

const GET_GAMES = 'GET_GAMES'

const initialState = {
  games: []
}

const getGames = games => ({type: GET_GAMES, games})

export const getAllGames = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/games')
      const message = response.data
      const action = getGames(message)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {...state, games: action.games}
    default:
      return state
  }
}
