import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    render() {
        return (
            // <div className="login-form">
            //     <div className="login">
            //         <label className="login-label">Username</label>
            //         <input type="text" />
            //         <label className="login-label">Password</label>
            //         <input type="text" />
            //         <a className="button is-warning">Let's Rock</a>
            //     </div>
            // </div>
            <section class="hero login-form is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <h3 class="title has-text-grey">Login</h3>
                            <p class="subtitle has-text-grey">Please login to proceed.</p>
                            <div class="box">
                                <figure class="avatar">
                                    <img src="https://placehold.it/128x128" />
                                </figure>
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
                                    <div class="field">
                                        <label class="checkbox">
                                            <input type="checkbox" />
                                            Remember me
                    </label>
                                    </div>
                                    <button class="button is-block is-warning is-large is-fullwidth">Let's Rock</button>
                                </form>
                            </div>
                            <p class="has-text-grey has-text-center">
                                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login