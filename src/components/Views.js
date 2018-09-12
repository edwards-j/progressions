import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import Login from './Login/Login'
import Dashboard from './Dashboard'
import NewSong from './NewSong/NewSong'
import Register from './Login/Register'
import YourSongList from './YourSongs/YourSongList'


export default class Views extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path ="/new-song" component={NewSong} />
                <Route exact path ="/your-songs" component={YourSongList} />
            </React.Fragment>
        )
    }
}