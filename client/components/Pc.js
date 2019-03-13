import React from 'react'
import {Link} from 'react-router-dom'

const Pc = props => {
  let filterd = props.games.filter(game => game.pc === true)
  return (
    <div>
      <h3>PC Games</h3>
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

export default Pc
