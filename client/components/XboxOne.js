import React from 'react'

const XboxOne = props => {
  let filterd = props.games.filter(game => game.xBoxOne === true)
  return (
    <div>
      <h3>Xbox One Games</h3>
      {filterd.map(game => {
        return <div key={game.id}>{game.name}</div>
      })}
    </div>
  )
}

export default XboxOne
