import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    // console.log(event.target.username.value, event.target.password.value)
    // const username = event.target.username.value
    // const password = event.target.password.value
    const username = this.state.username
    const password = this.state.password
    // console.log(username, password)
    if (username !== "" || password !== ""){
    this.props.onSubmit(username, password)
  }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
              type="text"
              name="username"
              value={this.state.value}
          onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
              type="password"
              name="password"
              value={this.state.value}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
