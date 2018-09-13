import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import Login from './Login/Login'
import Dashboard from './Dashboard'
import NewSong from './NewSong/NewSong'
import Register from './Login/Register'
import YourSongList from './YourSongs/YourSongList'
import SongDetail from './YourSongs/SongDetail'

import DataManager from '../modules/DataManager'
import UserSS from '../modules/userSS'


export default class Views extends Component {

    state = {
        yourSongs: []
    }

    componentDidMount() {
        DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
            .then(songs => this.setState({ yourSongs: songs }))
    }

    addSong = (song) => 
        DataManager.saveData.saveSong(song)
        .then((() => DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())))
        .then(songs => this.setState({yourSongs: songs}))
    

    deleteSong = (songID) => {
        DataManager.deleteData.deleteSong(songID)
            .then(() => {
                DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
                    .then(songs => this.setState({ yourSongs: songs }))
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path ="/new-song" render={props => {
                    return <NewSong {...props}
                    addSong={this.addSong} />
                }} />
                <Route exact path ="/your-songs" render={props => {
                    return <YourSongList {...props} 
                    yourSongs={this.state.yourSongs}
                    deleteSong={this.deleteSong}/>
                }} />
                <Route path="/your-songs/:songId(\d+)" render={props => {
                    return <SongDetail {...props} 
                    yourSongs={this.state.yourSongs}
                    deleteSong={this.deleteSong}/>
                }} />
            </React.Fragment>
        )
    }
}