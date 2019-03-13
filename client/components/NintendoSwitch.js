import React from 'react'
import {Link} from 'react-router-dom'

const NintendoSwitch = props => {
  let filterd = props.games.filter(game => game.nintendoSwitch === true)
  return (
    <div>
      <h3>Nintendo Switch Games</h3>
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

export default NintendoSwitch
