import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllConsoles} from '../store/console'
import AllConsolesView from './allConsolesDum'

class Consoles extends Component {
  componentDidMount() {
    this.props.fetchAllConsoles()
  }

  render() {
    return (
      <div>
        <h3>All Consoles</h3>
        {this.props.consoles ? <AllConsolesView {...this.props} /> : null}
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
