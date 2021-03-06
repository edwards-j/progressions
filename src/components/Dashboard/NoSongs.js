import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard">
                <div className="has-text-centered">
                    <p>It doesn't look like you've written any songs yet, so let's get started!</p>
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