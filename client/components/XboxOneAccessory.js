import React from 'react'
import {Link} from 'react-router-dom'

const XboxOneAccessory = props => {
  console.log(props)
  let filterd = props.accessories.filter(
    accessory => accessory.console.name === 'Xbox One'
  )
  return (
    <div>
      <h3>Xbox One Accessories</h3>
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

export default XboxOneAccessory
