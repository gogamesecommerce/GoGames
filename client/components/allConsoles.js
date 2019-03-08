import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllConsoles} from '../store/console'

class Consoles extends Component {
  componentDidMount() {
    this.props.fetchAllConsoles()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>All Consoles</h3>
        {this.props.consoles &&
          this.props.consoles.map(console => {
            return <div key={console.name}>{console.name}</div>
          })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  consoles: state.consoles.consoles
})

const mapDispatchToProps = dispatch => ({
  fetchAllConsoles: () => {
    dispatch(getAllConsoles())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Consoles)
