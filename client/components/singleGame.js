import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleGame} from '../store/game'

class SingleGame extends Component {
  componentDidMount() {
    const gameId = Number(this.props.match.params.id)
    this.props.fetchSingleGame(gameId)
  }

  render() {
    const {
      name,
      publisher,
      developer,
      genre,
      description,
      releaseDate,
      price,
      imageUrl
    } = this.props.singleGame

    return (
      <div>
        {this.props.singleGame && (
          <div className="container text-center customCont">
            <div>
              <img src={imageUrl} />
            </div>
            <div>Name: {name}</div>
            <div>Price: ${price}</div>
            <div>Developer: {developer}</div>
            <div>Publisher: {publisher}</div>
            <div>Genre: {genre}</div>
            <div>Release Date: {releaseDate}</div>
            <div>Description: {description}</div>
            <div className="text-center">
              <button type="button" className="btn btn-info button">
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleGame: state.games.singleGame
})

const mapDispatchToProps = dispatch => ({
  fetchSingleGame: id => {
    dispatch(fetchSingleGame(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)
