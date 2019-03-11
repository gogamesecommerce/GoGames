import React from 'react'
import {Link} from 'react-router-dom'

const AllConsolesView = props => {
  return (
    <div>
      {props.consoles.map(console => {
        return (
          <div className="container" key={console.id}>
            <Link to={`/consoles/${console.id}`}>
              <div>{console.name}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default AllConsolesView
