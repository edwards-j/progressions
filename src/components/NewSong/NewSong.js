import React, { Component } from 'react'
import Link from 'react-router-dom'
import DataManager from '../../modules/DataManager'
import './ChordDisplayer'
import './NewSong.css'
import UserSS from '../../modules/userSS'
import ChordDisplayer from './ChordDisplayer';
import * as Key from 'tonal-key'
import * as Scale from 'tonal-scale'

export default class NewSong extends Component {
    state = {
        title: "",
        selectedKey: [],
        chord1: "",
        chord2: "",
        chord3: "",
        chord4: "",
        lyrics: "",
        description: ""

    }

    handleKeyChange = evt => {
        DataManager.getData.getKey(evt.target.value)
            .then(res => this.setState({ currentKey: res }))
            .then(() => this.setState({
                yourChords: {
                    "chord1": "",
                    "chord2": "",
                    "chord3": "",
                    "chord4": "",
                }
            }))
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

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    saveSong = () => {
        const newSong = {
            userId: UserSS.loadUserIDFromSS(),
            title: this.state.title,
            chord1: this.state.chord1,
            chord2: this.state.chord2,
            chord3: this.state.chord3,
            chord4: this.state.chord4,
            lyrics: this.state.lyrics,
            description: this.state.description,
            public: false
        }

        DataManager.saveData.saveSong(newSong)
    }

    render() {
        return (
            <div>
                <div className="has-text-centered">
                    <h4 className="is-size-4">Song Title</h4>
                    <input type="text" id="title" onChange={this.handleFieldChange} /><br />
                </div>
                Select Key:
                <select name="selectedKey" id="selectedKey" onChange={this.handleFieldChange}>
                    <option value="C Major">C Major</option>
                    <option value="C Minor">C Minor</option>
                    <option value="D Major">D Major</option>
                    <option value="D Minor">D Minor</option>
                    <option value="E Major">E Major</option>
                    <option value="E Minor">E Minor</option>
                    <option value="F Major">F Major</option>
                    <option value="F Minor">F Minor</option>
                    <option value="G Major">G Major</option>
                    <option value="G Minor">G Minor</option>
                    <option value="A Major">A Major</option>
                    <option value="A Minor">A Minor</option>
                    <option value="B Major">B Major</option>
                    <option value="B Minor">B Minor</option>
                </select>

                <div>
                    <div>
                        <h4 className="is-size-4 has-text-centered">Available Chords</h4>


                        <div className="columns">
                            {
                                Key.degrees(this.state.selectedKey).map(deg => <p key={deg.index} className="column has-text-centered degree">{deg}</p>)
                            }
                        </div>
                        <div className="columns">
                            {
                                Key.chords(this.state.selectedKey).map(chord => <p key={chord.index} className="column has-text-centered">{chord.split("7")}</p>)
                            }
                        </div>

                    </div>
                    <h4 className="is-size-4 has-text-centered">Your Chords</h4>
                    <div className="your-chords columns">
                        <div className="chord has-text-centered column">
                            <select name="chord1" id="chord1" onChange={this.handleChord1Change}>
                                <option value="---">---</option>
                                {
                                    Key.chords(this.state.selectedKey).map(chord => <option key={chord.index} className="column has-text-centered" value={chord.split("7")}>{chord.split("7")}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord1Displayer chord1={this.state.chord1} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord2" id="chord2" onChange={this.handleChord2Change}>
                                <option value="---">---</option>
                                {
                                    Key.chords(this.state.selectedKey).map(chord => <option key={chord.index} className="column has-text-centered" value={chord.split("7")}>{chord.split("7")}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord2Displayer chord2={this.state.chord2} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord3" id="chord3" onChange={this.handleChord3Change}>
                                <option value="---">---</option>
                                {
                                    Key.chords(this.state.selectedKey).map(chord => <option key={chord.index} className="column has-text-centered" value={chord.split("7")}>{chord.split("7")}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord3Displayer chord3={this.state.chord3} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord4" id="chord4" onChange={this.handleChord4Change}>
                                <option value="---">---</option>
                                {
                                    Key.chords(this.state.selectedKey).map(chord => <option key={chord.index} className="column has-text-centered" value={chord.split("7")}>{chord.split("7")}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord4Displayer chord4={this.state.chord4} {...this.props} />
                        </div>
                    </div>
                </div>
                <div className="has-text-centered">
                    <h4 className="is-size-4">Lyrics</h4>
                    <textarea id="lyrics" rows="20" cols="70" onChange={this.handleFieldChange} />
                </div>
                <div>
                    <h4 className="is-size-4">Song Description</h4>
                    <input type="text" id="description" onChange={this.handleFieldChange} />
                </div>
                <button className="button is-info" onClick={this.saveSong}>Save Song</button>

            </div>
        )
    }
}