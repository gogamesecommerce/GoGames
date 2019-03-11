import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleConsole} from '../store/console'

class SingleConsole extends Component {
  componentDidMount() {
    const consoleId = Number(this.props.match.params.id)
    this.props.fetchSingleConsole(consoleId)
  }

  render() {
    const {name, companyName, price} = this.props.singleConsole
    return (
      <div>
        {this.props.singleConsole && (
          <div>
            <div>{name}</div>
            <div>{companyName}</div>
            <div>${price}</div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleConsole: state.consoles.singleConsole
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleConsole: id => {
      dispatch(fetchSingleConsole(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleConsole)
