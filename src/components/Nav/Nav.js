import React, { Component } from 'react'
import { Link } from "react-router-dom"
import 'bulma'
import logo from '../../img/logo2.png'
import './Nav.css'


export default class Nav extends Component {
    logout = () => {
        sessionStorage.setItem("userInfo", "")
        this.props.handleNavChange()
    }

    render() {
        return (
            <div>
                {(this.props.showNav) ?
                    <div id="fullNav" className="fullNav">
                        <div className="container">
                            <nav className="navbar fullNav">
                                <div className="navbar-brand">
                                    <Link className="navbar-item" to="/dashboard">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>

                                <div id="" className="navbar-menu is-active">
                                    <div className="navbar-start">
                                        <Link className="navLink navbar-item" to="/dashboard">Dashboard</Link>
                                        <Link className="navLink navbar-item" to="/new-song">New Song</Link>
                                        <Link className="navLink navbar-item" to="/your-songs">Your Songs</Link>
                                        <Link className="navLink navbar-item" to="/public-songs">Public Songs</Link>
                                    </div>

                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <Link className="navLink navbar-item button is-rounded" to="/login" onClick={this.logout}>Logout</Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    :
                    <div></div>
                }
            </div>
            )
        }
}