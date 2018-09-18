import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
import './SongCard.css'

export default class SongCard extends Component {
    render() {
        return (
            <Tilt className="Tilt song-card" options={{scale: 1.03, max: 10} } >
                <div className="Tilt-inner">
                    <div className="card-title">
                        <h5 className="is-size-5 has-text-white">{this.props.song.title}</h5>
                        <a className="delete-button" onClick={() => this.props.deleteSong(this.props.song.id)}><i className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="card-body">
                        <p className="card-description">{this.props.song.description}</p>
                        <div className="has-text-centered">
                            <Link className="detail-button button is-small is-rounded" to={`/your-songs/${this.props.song.id}`}>Details</Link>
                        </div>
                    </div>
                </div>
            </Tilt>
        )
    }
}