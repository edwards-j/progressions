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
                <h6 className="is-size-6 has-text-centered has-text-grey"><span className="is-italic"> Composer: {song.username} </span>| <span className="is-italic">Key: {song.selectedKey} {song.MajorMinor}</span></h6>

                <h4 className="is-size-4 has-text-centered">Chords Used</h4>
                <div key={song.id} className="">
                    <div className="">
                        <div className="your-chords columns">
                            <div className="column chord is-offset-3 yourChord1">
                                <ChordDisplayer.Chord1Displayer chord1={song.chord1} {...this.props} />
                            </div>
                            <div className="column chord yourChord2">
                                <ChordDisplayer.Chord2Displayer chord2={song.chord2} {...this.props} />
                            </div>
                            <div className="column chord yourChord3">
                                <ChordDisplayer.Chord3Displayer chord3={song.chord3} {...this.props} />
                            </div>
                            <div className="column chord yourChord4">
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
