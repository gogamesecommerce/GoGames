import React from 'react'
import {Link} from 'react-router-dom'

const AllConsolesView = props => {
  return (
    <div className="row">
      {props.consoles.map(console => {
        return (
          <div className="col card m-3 p-3" key={console.id}>
            <img src={console.imageUrl} className="class-img-top" />
            <a className="btn btn-info" href={`/consoles/${console.id}`}>
              <div>{console.name}</div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default AllConsolesView
