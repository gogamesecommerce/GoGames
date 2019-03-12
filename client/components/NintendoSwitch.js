import React from 'react'

const NintendoSwitch = props => {
  let filterd = props.games.filter(game => game.nintendoSwitch === true)
  return (
    <div>
      <h3>Nintendo Switch Games</h3>
      {filterd.map(game => {
        return <div key={game.id}>{game.name}</div>
      })}
    </div>
  )
}

export default NintendoSwitch
