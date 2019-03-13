import axios from 'axios'

const GET_GAMES = 'GET_GAMES'
const GET_SINGLE_GAME = 'GET_SINGLE_GAME'

const initialState = {
  games: [],
  singleGame: {}
}

const getGames = games => ({type: GET_GAMES, games})
const getSingleGame = game => ({type: GET_SINGLE_GAME, game})

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

export const fetchSingleGame = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/games/${id}`)
      const message = response.data
      const action = getSingleGame(message)
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
    case GET_SINGLE_GAME:
      return {...state, singleGame: action.game}
    default:
      return state
  }
}
