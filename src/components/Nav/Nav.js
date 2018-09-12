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
            <nav className="navbar is-info">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/dashboard">Dashboard</Link>
                        <Link className="navbar-item" to="/new-song">New Song</Link>
                        <Link className="navbar-item" to="/your-songs">Your Songs</Link>
                        <Link className="navbar-item" to="/your-songs">Public Songs</Link>
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