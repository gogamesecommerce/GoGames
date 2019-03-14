import React from 'react'
import {Link} from 'react-router-dom'

const PlayStationAccessory = props => {
  console.log(props)
  let filterd = props.accessories.filter(
    accessory => accessory.console.name === 'Playstation 4'
  )
  return (
    <div>
      <h3>PlayStation 4 Accessories</h3>
      {filterd.map(accessory => {
        return (
          <div key={accessory.id}>
            <Link to={`/accessories/${accessory.id}`}>
              <div>{accessory.name}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PlayStationAccessory
