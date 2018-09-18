import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import NewSong from './NewSong/NewSong'
import Register from './Login/Register'
import YourSongList from './YourSongs/YourSongList'
import SongDetail from './YourSongs/SongDetail'
import PublicSongList from '../components/PublicSongs/PublicSongList'
import PublicSongDetails from '../components/PublicSongs/PublicSongDetails'

import DataManager from '../modules/DataManager'
import UserSS from '../modules/userSS'


export default class Views extends Component {
    state = {
        allUsers: [{
            id: "",
            password: "",
            username: ""
        }],
        yourSongs: [],
        publicSongs: []
    }

    getAllUsers = () => {
        DataManager.getData.getUsers()
            .then(users => this.setState({ allUsers: users }))
    }

    getYourSongs = () => {
        DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
            .then(songs => this.setState({ yourSongs: songs }))
    }

    addSong = (song) =>
        DataManager.saveData.saveSong(song)
            .then((() => DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())))
            .then(songs => this.setState({ yourSongs: songs }))


    deleteSong = (songID) => {
        DataManager.deleteData.deleteSong(songID)
            .then(() => DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS()))
            .then(songs => this.setState({ yourSongs: songs }))
    }

    editSong = (songID, editedSong) => {
        DataManager.editData.editSong(songID, editedSong)
            .then(() => {
                return DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
                    .then(songs => this.setState({ yourSongs: songs }))
            })
    }

    getPublic = () => {
        DataManager.getData.getPublicSongs()
            .then(res => this.setState({ publicSongs: res }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" render={props => {
                        return <Login {...props}
                            handleNavChange={this.props.handleNavChange}
                            addSong={this.addSong} />
                }} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/new-song" render={props => {
                    if (this.props.isAuthenticated()) {
                        return <NewSong {...props}
                            addSong={this.addSong} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/your-songs" render={props => {
                    if (this.props.isAuthenticated()) {
                        return <YourSongList {...props}
                            getYourSongs={this.getYourSongs}
                            yourSongs={this.state.yourSongs}
                            deleteSong={this.deleteSong} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/your-songs/:songId(\d+)" render={props => {
                    return <SongDetail {...props}
                        yourSongs={this.state.yourSongs}
                        editSong={this.editSong}
                        deleteSong={this.deleteSong} />
                }} />
                <Route exact path="/public-songs/" render={props => {
                    if (this.props.isAuthenticated()) {
                        return <PublicSongList {...props}
                            getAllUsers={this.getAllUsers}
                            allUsers={this.state.allUsers}
                            getPublic={this.getPublic}
                            publicSongs={this.state.publicSongs} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/public-songs/:songId(\d+)" render={props => {
                    return <PublicSongDetails {...props}
                        publicSongs={this.state.publicSongs}
                        deleteSong={this.deleteSong} />
                }} />
            </React.Fragment>
        )
    }
}