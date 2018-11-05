import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataManager from '../../modules/DataManager'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Register extends Component {
    state = {
        username: "",
        password: "",
        registerSuccess: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    resetState = () => this.setState({ registerSuccess: false })

    registerNewUser = () => {
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        DataManager.saveData.newUser(newUser)
            .then(() => alert("You've successfully registered, please login"))
            .then(() => this.props.history.push("/"))
    }

    render() {
        return (
            <section class="hero login-form is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <h3 class="title register-title">Signup</h3>
                            <p class="subtitle register-subtitle">Please make a new account to proceed.</p>
                            <div class="column form">
                                <div>
                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Username</label>
                                            <input id="username" className="input is-large is-rounded" type="text" placeholder="" autofocus="" onChange={this.handleFieldChange} />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Password</label>
                                            <input id="password" className="input is-large is-rounded" type="password" placeholder="" onChange={this.handleFieldChange} />
                                        </div>
                                    </div>

                                    <button className="button is-block login-button is-large is-fullwidth is-rounded" onClick={this.registerNewUser}>Signup</button>
                                </div>
                            </div>
                            <div className="has-text-centered">
                                <Link to="/" className="cancel-register">Cancel</Link> &nbsp;·&nbsp;
                        </div>
                        </div>
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