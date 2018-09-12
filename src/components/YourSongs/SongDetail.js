import React, { Component } from 'react'
import ChordDisplayer from '../NewSong/ChordDisplayer'

export default class SongDetail extends Component {
    render() {
        const song = this.props.yourSongs.find(s => s.id === parseInt(this.props.match.params.songId, 0)) || {}

        return (
            <div key={song.id} className="card">
                <div className="card-body">
                    <h4 className="is-size-4">{song.title}</h4>
                    <div className="columns">
                        <div className="column">
                            <ChordDisplayer.Chord1Displayer chord1={song.chord1} {...this.props} />
                        </div>
                        <div className="column">
                            <ChordDisplayer.Chord2Displayer chord2={song.chord2} {...this.props} />
                        </div>
                        <div className="column">
                            <ChordDisplayer.Chord3Displayer chord3={song.chord3} {...this.props} />
                        </div>
                        <div className="column">
                            <ChordDisplayer.Chord4Displayer chord4={song.chord4} {...this.props} />
                        </div>
                    </div>
                    <p>{song.lyrics}</p>
                </div>
            </div>
        )
    }
}