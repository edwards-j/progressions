import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataManager from '../../modules/DataManager'

export default class Register extends Component {
    state = {
        username: "",
        password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    registerNewUser = () => {
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        DataManager.saveData.newUser(newUser)
            .then(() => alert("You've successfully registered, please login"))
            .then(() => this.props.history.push("/login"))
    }

    render() {
        return (
            <section class="hero login-form is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <h3 class="title has-text-grey">Signup</h3>
                            <p class="subtitle has-text-grey">Please make a new account to proceed.</p>
                            <div class="box">
                                <div>
                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Username</label>
                                            <input id="username" class="input is-large" type="text" placeholder="" autofocus="" onChange={this.handleFieldChange}/>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Password</label>
                                            <input id="password" class="input is-large" type="password" placeholder="" onChange={this.handleFieldChange}/>
                                        </div>
                                    </div>

                                    <button class="button is-block login-button is-large is-fullwidth" onClick={this.registerNewUser}>Signup</button>
                                </div>
                            </div>
                            <p class="has-text-grey">
                                <Link to="/login" className="has-text-white-ter">Cancel</Link> &nbsp;·&nbsp;
                                     </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}