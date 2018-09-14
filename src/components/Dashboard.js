import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../img/logo.png'
import './Dashboard.css'
import Tilt from 'react-tilt'


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
                        <h3 className="subtitle dashSubtitle ">Would you like to...</h3>
                        <div class="field is-grouped">
                            <p class="control">
                                <Tilt className="Tilt song-card" options={{ reverse: true, max: 30 }} >
                                    <Link to="/new-song" className="Tilt-inner button dash-button is-medium">
                                        Start a new song</Link>
                                </Tilt >
                            </p>
                            <p class="control">
                                <Tilt className="Tilt song-card" options={{ reverse: true, max: 30 }} >
                                    <Link to="/your-songs" className="Tilt-inner button dash-button is-medium">
                                        View your songs</Link>
                                </Tilt>
                            </p>
                            <p class="control">
                                <Tilt className="Tilt song-card" options={{ reverse: true, max: 30 }} >
                                    <Link to="/public-songs" className="Tilt-inner button dash-button is-medium">
                                        View Public Songs</Link>
                                </Tilt>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}