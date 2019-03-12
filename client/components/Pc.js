import React from 'react'

const Pc = props => {
  let filterd = props.games.filter(game => game.pc === true)
  return (
    <div>
      <h3>PC Games</h3>
      {filterd.map(game => {
        return <div key={game.id}>{game.name}</div>
      })}
    </div>
  )
}

export default Pc
