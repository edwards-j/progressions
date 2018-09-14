import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataManager from '../../modules/DataManager'
import './Login.css'
import logo from '../../img/logo.png'
import tagline from '../../img/tagline.png'

class Login extends Component {
    state = {
        username: "",
        password: "",
        rememberMe: false,
        showNav: false
    }

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
                    alert("Username does not exist")
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
                <div class="hero-body">
                    <div>
                    </div>
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <div className="logoLogin">
                                <img src={logo} />
                                <img src={tagline} />

                            </div>
                            <div class="box">
                                <p class="subtitle has-text-grey">Please login to proceed.</p>
                                <form>
                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Username</label>
                                            <input id="username" onChange={this.handleFieldChange} class="input is-large" type="text" placeholder="" />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <label className="login-flag">Password</label>
                                            <input id="password" onChange={this.handleFieldChange} class="input is-large" type="password" placeholder="" />
                                        </div>
                                    </div>
                                    <a class="button is-block is-warning is-large is-fullwidth" onClick={this.login}>Let's Rock</a>
                                </form>
                            </div>
                            <p class="has-text-grey has-text-center">
                                <p className="has-text-white">New around here?</p>
                                <Link to="/register" className="has-text-white"><i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up
                                </Link> &nbsp;·&nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login