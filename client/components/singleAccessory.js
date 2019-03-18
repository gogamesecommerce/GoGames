import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleAccessory} from '../store/accessory'

class SingleAccessory extends Component {
  componentDidMount() {
    const accessoryId = Number(this.props.match.params.id)
    this.props.fetchSingleAccessory(accessoryId)
  }

  render() {
    const {name, price, company, imageUrl} = this.props.singleAccessory
    return (
      <div>
        {this.props.singleAccessory && (
          <div>
            <div>
              <img src={imageUrl} />
            </div>
            <div>Name: {name}</div>
            <div>Made By: {company}</div>
            <div>Price: ${price}</div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleAccessory: state.accessories.singleAccessory
})
const mapDispatchToProps = dispatch => ({
  fetchSingleAccessory: id => {
    dispatch(fetchSingleAccessory(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleAccessory)
