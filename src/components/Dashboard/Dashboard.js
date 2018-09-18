import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../../img/logo2.png'
import './Dashboard.css'
import UserSS from '../../modules/userSS'
import DataManager from '../../modules/DataManager'

import NoSongs from './NoSongs'
import OneToThree from './OneToThreeSongs'
import MoreThanFour from './MoreThanFourSongs'

export default class Dashboard extends Component {
    state = {
        username: "",
        yourSongs: []
    }

    componentDidMount() {
        const currentUser = UserSS.loadUserNameFromSS()
        this.setState({ username: currentUser })

        DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
            .then(songs => this.setState({ yourSongs: songs }))
    }

    
    render() {
      const songCount = this.state.yourSongs.length
      let dashboardView;

      if (songCount === 0) {
          dashboardView = <NoSongs yourSongs={this.state.yourSongs} />
      } else if (songCount >= 1 && songCount <= 3) {
          dashboardView = <OneToThree yourSongs={this.state.yourSongs}/>
      } else if (songCount >= 4) {
        dashboardView = <MoreThanFour yourSongs={this.state.yourSongs}/>
    } 

        return (
            <div className="dashboard">
                <div className="dash-header">
                    <div>
                        <h2 className="title has-text-centered">Hey {this.state.username}, welcome to</h2>
                        <img className="dash-logo" src={logo} alt="logo" />
                    </div>
                </div>
                {dashboardView}
            </div>
        )
    }
}