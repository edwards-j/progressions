import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../YourSongs/SongCard.css'

export default class SongCard extends Component {
    componentDidMount() {
        this.props.getAllUsers()
    }
render() {
    return (
        <div className="song-card">
            <div className="has-background-info card-title">
                <h5 className="is-size-5 has-text-white">{this.props.song.title}</h5>
            </div>
            <div className="card-body">
                <p className="card-description">{this.props.song.description}</p>
                <hr />
                <p className="is-italic is-size-7 has-text-grey">Composer: {this.props.song.username}</p>
                <div className="has-text-centered">
                    <button className="button is-small is-rounded is-outlined"><Link to={`/public-songs/${this.props.song.id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    )
}
}