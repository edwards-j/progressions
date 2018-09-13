import React, { Component } from 'react'
import ChordDisplayer from '../NewSong/ChordDisplayer'
import Major from '../NewSong/Major'
import Minor from '../NewSong/Minor'

export default class SongDetail extends Component {

    render() {
        const song = this.props.publicSongs.find(s => s.id === parseInt(this.props.match.params.songId, 0)) || {}
        return (
            <div>
                <h1 className="is-size-1 has-text-centered">{song.title}</h1>
                <h6 className="is-size-6 has-text-centered is-italic has-text-grey">Composer: {song.username} | Key: {song.selectedKey} {song.MajorMinor}</h6>

                <h4 className="is-size-4 has-text-centered">Chords Used</h4>
                <div key={song.id} className="">
                    <div className="">
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
                    </div>
                </div>
            </div>
        )
    }
}
