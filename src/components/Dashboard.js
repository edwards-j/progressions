import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../img/logo2.png'
import './Dashboard.css'
import UserSS from '../modules/userSS'
import Tilt from 'react-tilt'


export default class Dashboard extends Component {

    render() {
        const currentUser = UserSS.loadUserNameFromSS()
        return (
            <div className="dashboard">
                <div className="dash-header">
                    <div>
                        <h2 className="title has-text-centered">Hey {currentUser}, welcome to</h2>
                        <img className="dash-logo" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="dash-header has-text-centered">
                    <div>
                        <h3 className="subtitle dashSubtitle ">Would you like to...</h3>
                        <div class="field is-grouped button-group ">
                            <p class="control">
                                <Link to="/new-song" className="button dash-button is-medium has-text-white">
                                    Start a new song</Link>
                            </p>
                            <p class="control">
                                <Link to="/your-songs" className="button dash-button is-medium has-text-white">
                                    View your songs</Link>
                            </p>
                            <p class="control">
                                <Link to="/public-songs" className="button dash-button is-medium has-text-white">
                                    View all public songs</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}