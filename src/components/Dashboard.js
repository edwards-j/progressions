import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../img/logo.png'
import './Dashboard.css'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="dash-header">
                    <div>
                        <h2 className="title has-text-centered">Welcome to</h2>
                        <img className="dash-logo" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="dash-header has-text-centered">
                    <div>
                        <h3 className="subtitle ">Would you like to...</h3>
                        <div class="field is-grouped">
                            <p class="control">
                                <Link to="/new-song" className="button dash-button is-warning">
                                    Start a new song</Link>
                            </p>
                            <p class="control">
                                <Link to="/your-songs" className="button dash-button is-warning">
                                    View your songs</Link>
                            </p>
                            <p class="control">
                                <Link to="/public-songs" className="button dash-button is-warning">
                                    View Public Songs</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}