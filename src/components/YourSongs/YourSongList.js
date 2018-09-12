import React, { Component } from 'react'
import SongCard from './SongCard'
import DataManager from '../../modules/DataManager'
import UserSS from '../../modules/userSS'

export default class YourSongList extends Component {
    state = {
        yourSongs: []
    }

    componentDidMount() {
        DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
            .then(songs => this.setState({ yourSongs: songs }))
    }

    deleteSong = (songID) => {
        DataManager.deleteData.deleteSong(songID)
            .then(() => {
                DataManager.getData.getUserSongs(UserSS.loadUserIDFromSS())
                    .then(songs => this.setState({ yourSongs: songs }))
            })

    }

    render() {
        return (
            <div>
                <h4 className="is-size-4">Your Songs</h4>
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        {
                            this.state.yourSongs.map((song) => <SongCard song={song} deleteSong={this.deleteSong}/>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}