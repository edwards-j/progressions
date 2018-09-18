import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../YourSongs/SongCard.css'
import Tilt from 'react-tilt'

export default class SongCard extends Component {
    componentDidMount() {
        this.props.getAllUsers()
    }
    render() {
        return (
            <Tilt className="Tilt song-card" options={{ scale: 1.03, max: 10 }} >
                <div className="Tilt-inner">
                    <div className="card-title">
                        <h5 className="is-size-5 has-text-white">{this.props.song.title}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-description">{this.props.song.description}</p>
                        <hr />
                        <p className="is-italic is-size-7 has-text-grey">Composer: {this.props.song.username}</p>
                        <div className="has-text-centered">
                            <Link className="detail-button button is-small is-rounded" to={`/public-songs/${this.props.song.id}`}>Details</Link>
                    </div>
                </div>
                </div>
            </Tilt >
        )
    }
}