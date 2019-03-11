import React from 'react'

const AllConsolesView = props => {
  return (
    <div>
      {props.consoles.map(console => {
        return (
          <div className="container">
            <div>{console.name}</div>
            <div>{console.companyName}</div>
            <div>${console.price}</div>
          </div>
        )
      })}
    </div>
  )
}

export default AllConsolesView
