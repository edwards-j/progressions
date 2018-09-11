import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <section class="hero login-form is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <h3 class="title has-text-grey">Login</h3>
                            <p class="subtitle has-text-grey">Please login to proceed.</p>
                            <div class="box">
                                <form>
                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Username</label>
                                            <input class="input is-large" type="email" placeholder="" autofocus="" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Password</label>
                                            <input class="input is-large" type="password" placeholder="" />
                                        </div>
                                    </div>
                                    <button class="button is-block is-warning is-large is-fullwidth">Let's Rock</button>
                                </form>
                            </div>
                            <p class="has-text-grey has-text-center">
                                <p className="has-text-white">New around here?</p>
                                <Link to="/register" className="has-text-white">Sign Up</Link> &nbsp;·&nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login