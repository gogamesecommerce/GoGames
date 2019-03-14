import React from 'react'
import {Link} from 'react-router-dom'

const NintendoAccessory = props => {
  console.log(props)
  let filterd = props.accessories.filter(
    accessory => accessory.console.name === 'Nintendo Switch'
  )
  return (
    <div>
      <h3>Nintendo Switch Accessories</h3>
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

export default NintendoAccessory
