import React, {Component} from 'react'
import {connect} from 'react-redux'
import SignUpForm from './signUpForm'
import {postUser} from '../store/user'
import SignedUpThankYou from './signedUpThankYou'

class SignUpUser extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      signedUp: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = event => {
    if (!this.state.firstName) {
      alert('You Must Enter A First Name')
    } else if (!this.state.lastName) {
      alert('You Must Enter A Last Name')
    } else if (!this.state.password) {
      alert('You Must Enter A Password')
    } else if (!this.state.email) {
      alert('You Must Enter A Email')
    } else {
      event.preventDefault()
      this.props.addNewUser(this.state)
      this.setState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        signedUp: true
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.signedUp ? (
          <SignUpForm
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <SignedUpThankYou />
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: user => {
      dispatch(postUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpUser)
