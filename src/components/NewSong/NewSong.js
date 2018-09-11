import React, { Component } from 'react'
import Link from 'react-router-dom'
import DataManager from '../../modules/DataManager'
import './ChordDisplayer'
import './NewSong.css'
import ChordDisplayer from './ChordDisplayer';

export default class NewSong extends Component {
    // constructor(props) {
    //     super(props)

    //     this.handleKeyChange = this.handleKeyChange.bind(this)
    // }

    state = {
        title: "",
        currentKey: {
            name: "",
            id: "",
            chords: [
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                },
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                },
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                },
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                },
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                },
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                },
                {
                    "name": "",
                    "audio": "",
                    "img": ""
                }
            ]
        },
        yourChords:
        {
            "chord1": "",
            "chord2": "",
            "chord3": "",
            "chord4": ""
        }
        ,
        lyrics: "",
        description: ""

    }

    handleKeyChange = evt => {
        DataManager.getData.getKey(evt.target.value)
            .then(res => this.setState({ currentKey: res }))
            .then(() => this.setState({
                yourChords: {
                    "chord1": this.state.currentKey.chords[0].name,
                    "chord2": this.state.currentKey.chords[0].name,
                    "chord3": this.state.currentKey.chords[0].name,
                    "chord4": this.state.currentKey.chords[0].name,
                }
            }))
    }

    handleChord1Change = evt => {
        this.setState({
            yourChords: {
                "chord1": evt.target.value,
                "chord2": this.state.yourChords.chord2,
                "chord3": this.state.yourChords.chord3,
                "chord4": this.state.yourChords.chord4,
            }
        })
    }

    handleChord2Change = evt => {
        this.setState({
            yourChords: {
                "chord1": this.state.yourChords.chord1,
                "chord2": evt.target.value,
                "chord3": this.state.yourChords.chord3,
                "chord4": this.state.yourChords.chord4,
            }
        })
    }

    handleChord3Change = evt => {
        this.setState({
            yourChords: {
                "chord1": this.state.yourChords.chord1,
                "chord2": this.state.yourChords.chord2,
                "chord3": evt.target.value,
                "chord4": this.state.yourChords.chord4,
            }
        })
    }

    handleChord4Change = evt => {
        this.setState({
            yourChords: {
                "chord1": this.state.yourChords.chord1,
                "chord2": this.state.yourChords.chord2,
                "chord3": this.state.yourChords.chord3,
                "chord4": evt.target.value,
            }
        })
    }

    componentDidMount = () => {
        DataManager.getData.getKey(1)
            .then(res => this.setState({ currentKey: res }))
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    saveSong = () => {
        const newSong = {
            title: this.state.title,
            key: this.state.currentKey.name,
            chords: this.state.yourChords,
            lyrics: this.state.lyrics,
            description: this.state.description,
            public: false
        }

        DataManager.saveData.saveSong(newSong)
    }

    render() {
        const chord = this.state.currentKey.chords


        return (
            <div>
                <div className="has-text-centered">
                    <h4 className="is-size-4">Song Title</h4>
                    <input type="text" id="title" onChange={this.handleFieldChange} /><br />
                </div>
                Select Key:
                <select name="selectedKey" id="selectedKey" onChange={this.handleKeyChange}>
                    <option value="1">Cmaj</option>
                    <option value="2">Cmi</option>
                    <option value="3">Dmaj</option>
                    <option value="4">Dmi</option>
                    <option value="5">Emaj</option>
                    <option value="6">Emi</option>
                    <option value="7">Fmaj</option>
                    <option value="8">Fmi</option>
                    <option value="9">Gmaj</option>
                    <option value="10">Gmi</option>
                    <option value="11">Amaj</option>
                    <option value="12">Ami</option>
                    <option value="13">Bmaj</option>
                    <option value="14">Bmi</option>
                </select>

                <div>
                    <div>
                        <h4 className="is-size-4 has-text-centered">Available Chords</h4>
                        {
                            <div className="columns">
                                {
                                    chord.map((chord) =>
                                        <p key={chord.id} className="column has-text-centered">{chord.name}</p>
                                    )
                                }
                            </div>
                        }
                    </div>
                    <h4 className="is-size-4 has-text-centered">Your Chords</h4>
                    <div className="your-chords columns">
                        <div className="chord has-text-centered column">
                            <select name="chord1" id="chord1" onChange={this.handleChord1Change}>
                                {
                                    chord.map(chord => <option value={chord.name}>{chord.name}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord1Displayer yourChords={this.state.yourChords} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord2" id="chord2" onChange={this.handleChord2Change}>
                                {
                                    chord.map(chord => <option value={chord.name}>{chord.name}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord2Displayer yourChords={this.state.yourChords} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord3" id="chord3" onChange={this.handleChord3Change}>
                                {
                                    chord.map(chord => <option value={chord.name}>{chord.name}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord3Displayer yourChords={this.state.yourChords} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord4" id="chord4" onChange={this.handleChord4Change}>
                                {
                                    chord.map(chord => <option value={chord.name}>{chord.name}</option>)
                                }
                            </select>
                            <ChordDisplayer.Chord4Displayer yourChords={this.state.yourChords} {...this.props} />
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