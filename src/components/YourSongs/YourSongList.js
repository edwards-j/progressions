import React, { Component } from 'react'
import SongCard from './SongCard'
import DataManager from '../../modules/DataManager'
import UserSS from '../../modules/userSS'

export default class YourSongList extends Component {
    render() {
        return (
            <div>
                <h4 className="is-size-4 has-text-centered">Your Songs</h4>
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        {
                            this.props.yourSongs.map((song) => <SongCard song={song} deleteSong={this.props.deleteSong}/>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}