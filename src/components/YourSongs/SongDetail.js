import React, { Component } from 'react'
import ChordDisplayer from '../NewSong/ChordDisplayer'
import Major from '../NewSong/Major'
import Minor from '../NewSong/Minor'

export default class SongDetail extends Component {
    state = {
        songID: "",
        title: "",
        chord1: "",
        chord2: "",
        chord3: "",
        chord4: "",
        lyrics: "",
        edit: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleEditClicked = () => {
        this.setState({
            edit: true
        })
    }
    handleChord1Change = evt => {
        this.setState({
            "chord1": evt.target.value,
            "chord2": this.state.chord2,
            "chord3": this.state.chord3,
            "chord4": this.state.chord4,
        })
    }

    handleChord2Change = evt => {
        this.setState({
            "chord1": this.state.chord1,
            "chord2": evt.target.value,
            "chord3": this.state.chord3,
            "chord4": this.state.chord4,
        })
    }

    handleChord3Change = evt => {
        this.setState({
            "chord1": this.state.chord1,
            "chord2": this.state.chord2,
            "chord3": evt.target.value,
            "chord4": this.state.chord4,
        })
    }

    handleChord4Change = evt => {
        this.setState({
            "chord1": this.state.chord1,
            "chord2": this.state.chord2,
            "chord3": this.state.chord3,
            "chord4": evt.target.value,
        })
    }

    handlePublic = () => (this.state.public) ? this.setState({ public: false }) : this.setState({ public: true })

    saveEditedSong = () => {
        const editedSong = {
            chord1: this.state.chord1,
            chord2: this.state.chord2,
            chord3: this.state.chord3,
            chord4: this.state.chord4,
            lyrics: this.state.lyrics,
            public: this.state.public
        }
        this.props.editSong(this.props.yourSongs.find(s => s.id === parseInt(this.props.match.params.songId, 0)).id, editedSong)
        this.setState({ edit: false })
    }

    componentDidMount() {
        const song = this.props.yourSongs.find(s => s.id === parseInt(this.props.match.params.songId, 0)) || {}
        this.setState({
            songID: song.id,
            chord1: song.chord1,
            chord2: song.chord2,
            chord3: song.chord3,
            chord4: song.chord4,
            lyrics: "",
        })
    }

    render() {
        const song = this.props.yourSongs.find(s => s.id === parseInt(this.props.match.params.songId, 0)) || {}
        return (
            <div>
                <h1 className="is-size-1 has-text-centered">{song.title}</h1>
                <h5 className="is-size-5 has-text-centered">Key: {song.selectedKey} {song.MajorMinor}</h5>
                {(this.state.edit) ?
                    <div>
                        {(song.MajorMinor === "major") ?
                            <Major
                                chord1={this.state.chord1}
                                chord2={this.state.chord2}
                                chord3={this.state.chord3}
                                chord4={this.state.chord4}
                                handleChord1Change={this.handleChord1Change}
                                handleChord2Change={this.handleChord2Change}
                                handleChord3Change={this.handleChord3Change}
                                handleChord4Change={this.handleChord4Change}
                                selectedKey={song.selectedKey}
                                MajorMinor={song.MajorMinor}
                            />
                            :
                            <Minor
                                chord1={this.state.chord1}
                                chord2={this.state.chord2}
                                chord3={this.state.chord3}
                                chord4={this.state.chord4}
                                handleChord1Change={this.handleChord1Change}
                                handleChord2Change={this.handleChord2Change}
                                handleChord3Change={this.handleChord3Change}
                                handleChord4Change={this.handleChord4Change}
                                selectedKey={song.selectedKey}
                                MajorMinor={song.MajorMinor} />
                        }
                        <div className="has-text-centered">
                            <h4 className="is-size-4">Lyrics</h4>
                            <textarea id="lyrics" rows="20" cols="70" onChange={this.handleFieldChange} defaultValue={song.lyrics} />
                            <label for="public">Make song public?</label>
                            <input type="checkbox" id="public" onChange={this.handlePublic} />
                        </div>
                    </div>
                    :
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
                }

                {(this.state.edit) ?
                    <div className="has-text-centered">
                        <button className="button is-info is-outlined is-rounded" onClick={this.saveEditedSong}>Save</button>
                    </div>
                    :
                    <div className="has-text-centered">
                        <button className="button is-danger is-outlined is-rounded" onClick={() => this.props.deleteSong(song.id)}><i className="fas fa-trash-alt"></i></button>
                        <button className="button is-warning is-outlined is-rounded" onClick={this.handleEditClicked}><i className="far fa-edit"></i></button>
                    </div>
                }
            </div>
        )
    }
}