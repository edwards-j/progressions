import React, { Component } from 'react'
import SongCard from './SongCard'

export default class YourSongList extends Component {
    componentDidMount() {
        this.props.getYourSongs()
    }

    render() {
        return (

            <div>
                <h4 className="is-size-4 has-text-centered">Your Songs</h4>
                <div>
                    <p className="has-text-centered">Below is a list of all the songs you've written.</p>
                </div>
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        {
                            this.props.yourSongs.map((song) => <SongCard song={song} deleteSong={this.props.deleteSong} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}