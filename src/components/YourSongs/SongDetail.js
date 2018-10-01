import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ChordDisplayer from '../NewSong/ChordDisplayer'
import Major from '../NewSong/Major'
import Minor from '../NewSong/Minor'
import './SongDetails.css'

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
            lyrics: song.lyrics,
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
                            <div className="column is-6 is-offset-3">
                                <textarea id="lyrics" className="textarea lyricInput" rows="10" cols="20" onChange={this.handleFieldChange} defaultValue={song.lyrics} /><br />
                            </div>
                            <label for="public">Make song public? </label>
                            <input type="checkbox" id="public" onChange={this.handlePublic} /><br />
                        </div>
                    </div>
                    :
                    <div key={song.id} className="">
                        <h4 className="is-size-4 has-text-centered">Chords Used</h4>
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
                }
                {(this.state.edit) ?
                    <div className="has-text-centered">
                        <button className="save-edits-button button is-rounded" onClick={this.saveEditedSong}>Save Changes <i style={{marginLeft: ".5em"}} className="far fa-save"></i></button>
                    </div>
                    :
                    <div className="songDetailButtons columns">
                        <Link to="/your-songs" className="delete-song-button button is-rounded column is-1 is-offset-4 is-paddingless" onClick={() => this.props.deleteSong(song.id)}><i className="fas fa-trash-alt"></i></Link>
                        <button className="edit-song-button button is-rounded column is-1 is-offset-2 is-paddingless" onClick={this.handleEditClicked}><i className="far fa-edit"></i></button>
                    </div>
                }
            </div>
        )
    }
}