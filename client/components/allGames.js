import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllGames} from '../store/game'
import PlayStation from './PlayStation'
import XboxOne from './XboxOne'
import Pc from './Pc'
import NintendoSwitch from './NintendoSwitch'

class Games extends Component {
  componentDidMount() {
    this.props.fetchAllGames()
  }

  render() {
    return (
      <div className="container">
        <h3>All Games</h3>
        {this.props.games ? (
          <div>
            <PlayStation {...this.props} />
            <XboxOne {...this.props} />
            <Pc {...this.props} />
            <NintendoSwitch {...this.props} />
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  games: state.games.games
})

const mapDispatchToProps = dispatch => ({
  fetchAllGames: () => {
    dispatch(getAllGames())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Games)
