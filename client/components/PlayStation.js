import React from 'react'

const PlayStation = props => {
  let filterd = props.games.filter(game => game.playStationFour === true)
  return (
    <div>
      <h3>PlayStation 4 Games</h3>
      {filterd.map(game => {
        return <div key={game.id}>{game.name}</div>
      })}
    </div>
  )
}

export default PlayStation
