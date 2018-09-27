import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataManager from '../../modules/DataManager'
import './Login.css'
import logo from '../../img/logo2.png'
import tagline from '../../img/tagline2.png'

import { headShake } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    headShake: {
        animation: 'x 1s',
        animationName: Radium.keyframes(headShake, 'headShake')
    }
}

class Login extends Component {
    state = {
        username: "",
        password: "",
        rememberMe: false,
        showNav: false,
        failedLogin: false
    }

    resetState = () => this.setState({ failedLogin: false })

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    login = () => {
        DataManager.getData.getUsers()
            .then(result => {
                let user = result.find(result => {
                    //Checks to see if the info entered is in the database
                    return this.state.username === result.username && this.state.password === result.password
                })
                if (!user) {
                    this.setState({ failedLogin: true })
                    toast.error('Please enter a valid username and password', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                        });
                    window.setTimeout(this.resetState, 1000)
                    return
                } else {
                    return DataManager.getData.getUser(this.state.username)
                        .then((result) => {
                            let stringifiedUserObject = JSON.stringify(result);
                            sessionStorage.setItem("userInfo", stringifiedUserObject)
                        })
                        .then(() => this.props.history.push("/dashboard"))
                        .then(() => this.props.handleNavChange())
                }
            })
    }

    render() {
        return (
            <section class="hero login-form is-fullheight">
               
                <div class="">
                    <div>
                    </div>
                    <div class="container has-text-centered">
                        <div className="logoLogin">
                            <img src={logo} />
                            <img src={tagline} />
                        </div>
                        {(this.state.failedLogin) ?
                            <StyleRoot>
                                <div class="column is-4 is-offset-4 form" style={styles.headShake}>
                                    <div class="" >
                                        <div class="field">
                                            <div class="control">
                                                <label className="login-flag">Username</label>
                                                <input id="username" onChange={this.handleFieldChange} class="input is-large is-rounded" type="text" placeholder="" />
                                            </div>
                                        </div>

                                        <div class="field">
                                            <div class="control">
                                                <label className="login-flag">Password</label>
                                                <input id="password" onChange={this.handleFieldChange} className="input is-large is-rounded" type="password" placeholder="" />
                                            </div>
                                        </div>
                                        <a class="button is-block login-button is-large is-fullwidth is-rounded" onClick={this.login}>Let's Rock</a>
                                    </div>
                                    <p class="has-text-grey has-text-center">
                                        <p className="loginRegisterText">New around here?</p>
                                        <Link to="/register" className="loginRegisterText"><i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up
                                </Link> &nbsp;·&nbsp;
                            </p>
                                </div>
                            </StyleRoot>

                            :
                            <div class="column is-4 is-offset-4 form">
                                <div class="">
                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Username</label>
                                            <input id="username" onChange={this.handleFieldChange} class="input is-large is-rounded" type="text" placeholder="" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Password</label>
                                            <input id="password" onChange={this.handleFieldChange} className="input is-large is-rounded" type="password" placeholder="" />
                                        </div>
                                    </div>
                                    <a class="button is-block login-button is-large is-fullwidth is-rounded" onClick={this.login}>Let's Rock</a>
                                </div>
                                <p class="has-text-grey has-text-center">
                                    <p className="loginRegisterText">New around here?</p>
                                    <Link to="/register" className="loginRegisterText"><i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up
                                </Link> &nbsp;·&nbsp;
                            </p>
                            </div>
                        }
                    </div>
                </div>
                <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover/>
            </section>
        )
    }
}

export default Login