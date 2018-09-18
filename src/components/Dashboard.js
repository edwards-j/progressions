import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../img/logo2.png'
import './Dashboard.css'
import UserSS from '../modules/userSS'
import DataManager from '../modules/DataManager'

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
        return (
            <div className="dashboard">
                <div className="dash-header">
                    <div>
                        <h2 className="title has-text-centered">Hey {this.state.username}, welcome to</h2>
                        <img className="dash-logo" src={logo} alt="logo" />
                    </div>
                </div>
                <div>
                    <p>Looks like you've only got {this.state.yourSongs.length} songs so far. Let's change that.</p>
                </div>
                <div className="dash-header has-text-centered">
                    <div>
                        <h3 className="subtitle dashSubtitle ">Would you like to...</h3>
                        <div class="field is-grouped button-group ">
                            <p class="control">
                                <Link to="/new-song" className="is-rounded button dash-button is-medium">
                                    Start a new song</Link>
                            </p>
                            <p class="control">
                                <Link to="/your-songs" className="is-rounded button dash-button is-medium">
                                    View your songs</Link>
                            </p>
                            <p class="control">
                                <Link to="/public-songs" className="is-rounded button dash-button is-medium">
                                    View all public songs</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}