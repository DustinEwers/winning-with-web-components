import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container">
      <app-card id="login-form" title="Login Form">
        <form>
          <div>
            <app-field id="firstName" label="First Name" type="text" />
            <app-field id="lastName" label="Last Name" type="text" />
            <app-field id="username" label="Username" type="text" />
            <app-field id="password" label="Password" type="password" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </app-card>
    </div>
    );
  }
}

export default App;
