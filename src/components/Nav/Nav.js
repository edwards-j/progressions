import React, { Component } from 'react'
import { Link } from "react-router-dom"
import 'bulma'
import logo from '../../img/logo.png'
import './Nav.css'


export default class Nav extends Component {
    logout = () => {
        sessionStorage.setItem("userInfo", "")
    }

    render() {
        return (
            <nav className="navbar has-background-grey-light">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/dashboard">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div id="" className="navbar-menu is-active">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/dashboard">Dashboard</Link>
                        <Link className="navbar-item" to="/new-song">New Song</Link>
                        <Link className="navbar-item" to="/your-songs">Your Songs</Link>
                        <Link className="navbar-item" to="/public-songs">Public Songs</Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link className="navbar-item" to="/login" onClick={this.logout}>Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}