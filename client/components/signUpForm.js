import React from 'react'

const SignUpForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            onChange={props.handleChange}
            name="firstName"
            value={props.firstName}
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            onChange={props.handleChange}
            name="lastName"
            value={props.lastName}
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={props.handleChange}
            name="email"
            value={props.email}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={props.handleChange}
            name="password"
            value={props.password}
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  )
}

export default SignUpForm
