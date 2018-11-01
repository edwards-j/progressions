import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom"
import 'bulma'
import logo from '../../img/LogoWhite.png'
import './Nav.css'


export default class Nav extends Component {
    logout = () => {
        sessionStorage.removeItem("userInfo")
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
                                        <NavLink activeClassName="activeNavLink" className="nav-link" to="/dashboard">Dashboard</NavLink>
                                        <NavLink activeClassName="activeNavLink" className=" nav-link" to="/new-song">New Song</NavLink>
                                        <NavLink activeClassName="activeNavLink" className=" nav-link" to="/your-songs">Your Songs</NavLink>
                                        <NavLink activeClassName="activeNavLink" className=" nav-link" to="/public-songs">Public Songs</NavLink>
                                    </div>

                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <Link className="logout-button navbar-item button is-rounded" to="/" onClick={this.logout}>Logout</Link>
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