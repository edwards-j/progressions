import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SongCard extends Component {
    render() {
        return (
            <div className="box">
                <div className="has-background-info">
                    <h5 className="is-size-5 has-text-white">{this.props.song.title}</h5>
                    <button onClick={() => this.props.deleteSong(this.props.song.id)}>Delete Song</button>
                </div>
                <div>
                    <p>{this.props.song.description}</p>
                </div>
                <Link className="" to={`/your-songs/${this.props.song.id}`}>Details</Link>
            </div>
        )
    }
}