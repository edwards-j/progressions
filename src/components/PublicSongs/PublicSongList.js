import React, { Component } from 'react'
import SongCard from '../YourSongs/SongCard'
import DataManager from '../../modules/DataManager'
import PublicSongCard from './PublicSongCard'

export default class YourSongList extends Component {
    componentDidMount() {
        this.props.getPublic()
    }

    render() {
        return (
            <div>
                <h4 className="is-size-4 has-text-centered">Public Songs</h4>
                <div>
                    <p className="has-text-centered">Below is a list of other user's songs that they've decided to share with the world.</p>
                    <p className="has-text-centered">Feel free to check them out for inspiration.</p>
                </div>
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        {
                            this.props.publicSongs.map((song) => <PublicSongCard
                                allUsers={this.props.allUsers}
                                getAllUsers={this.props.getAllUsers}
                                song={song} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}