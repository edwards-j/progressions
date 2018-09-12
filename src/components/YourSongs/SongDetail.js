import React, { Component } from 'react'
import ChordDisplayer from '../NewSong/ChordDisplayer'

export default class SongDetail extends Component {
    render() {
        const song = this.props.yourSongs.find(s => s.id === parseInt(this.props.match.params.songId, 0)) || {}

        return (
            <div key={song.id} className="">
                <div className="">
                    <h1 className="is-size-1 has-text-centered">{song.title}</h1>
                    <h5 className="is-size-5 has-text-centered">{song.selectedKey}</h5>

                    <div className="your-chords columns">
                        <div className="column chord is-offset-3">
                            <ChordDisplayer.Chord1Displayer chord1={song.chord1} {...this.props} />
                        </div>
                        <div className="column chord">
                            <ChordDisplayer.Chord2Displayer chord2={song.chord2} {...this.props} />
                        </div>
                        <div className="column chord">
                            <ChordDisplayer.Chord3Displayer chord3={song.chord3} {...this.props} />
                        </div>
                        <div className="column chord">
                            <ChordDisplayer.Chord4Displayer chord4={song.chord4} {...this.props} />
                        </div>
                    </div>
                    <div className="columns">
                        <p className="column is-6 is-offset-3">{song.lyrics}</p>
                    </div>
                    <div className="has-text-centered">
                        <button className="button is-danger is-outlined is-rounded" onClick={() => this.props.deleteSong(song.id)}><i className="fas fa-trash-alt"></i></button>
                        <button className="button is-warning is-outlined is-rounded"><i className="far fa-edit"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}