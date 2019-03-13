import React from 'react'
import {Link} from 'react-router-dom'

const PlayStation = props => {
  let filterd = props.games.filter(game => game.playStationFour === true)
  return (
    <div>
      <h3>PlayStation 4 Games</h3>
      {filterd.map(game => {
        return (
          <div key={game.id}>
            <Link to={`/games/${game.id}`}>
              <div>{game.name}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PlayStation
