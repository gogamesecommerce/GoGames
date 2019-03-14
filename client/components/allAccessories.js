import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAccessories} from '../store/accessory'
import PlayStationAccessory from './PlayStationAccessory'
import XboxOneAccessory from './XboxOneAccessory'
import NintendoAccessory from './NintendoAccessory'

class Accessories extends Component {
  componentDidMount() {
    this.props.fetchAllAccessories()
  }

  render() {
    return (
      <div>
        <h3>All Accessories</h3>
        {this.props.accessories ? (
          <div>
            <PlayStationAccessory {...this.props} />
            <XboxOneAccessory {...this.props} />
            <NintendoAccessory {...this.props} />
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accessories: state.accessories.accessories
})

const mapDispatchToProps = dispatch => ({
  fetchAllAccessories: () => {
    dispatch(fetchAccessories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Accessories)
