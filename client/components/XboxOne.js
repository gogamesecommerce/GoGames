import React from 'react'
import {Link} from 'react-router-dom'

const XboxOne = props => {
  let filterd = props.games.filter(game => game.xBoxOne === true)
  return (
    <div>
      <h3>Xbox One Games</h3>
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

export default XboxOne
