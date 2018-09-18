import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Views from './components/Views'

export default class Progressions extends Component {
  isAuthenticated = () => sessionStorage.getItem("userInfo") !== null

  state = {
    showNav: false
  }

  handleNavChange = () => {
    (this.state.showNav) ? this.setState({ showNav: false }) : this.setState({ showNav: true })
  }

  render() {
    return (
      <div>
        <Nav
          showNav={this.state.showNav}
          handleNavChange={this.handleNavChange}
          isAuthenticated={this.isAuthenticated} />
        <Views
          handleNavChange={this.handleNavChange}
          isAuthenticated={this.isAuthenticated} />
      </div>
    );
  }
}