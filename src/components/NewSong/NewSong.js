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
            "chord1": {
                "name": "C",
                "audio": "",
                "img": ""
            },
            "chord2": {
                "name": "C",
                "audio": "",
                "img": ""
            },
            "chord3": {
                "name": "C",
                "audio": "",
                "img": ""
            },
            "chord4": {
                "name": "C",
                "audio": "",
                "img": ""
            }
        }
        ,
        lyrics: "",
        description: ""

    }

    handleKeyChange = evt => {
        DataManager.getData.getKey(evt.target.value)
            .then(res => this.setState({ currentKey: res }))
    }

    handleChord1Change = evt => {
        this.setState({
            yourChords: {
                "chord1": {
                    "name": evt.target.value,
                    "audio": "",
                    "img": ""
                },
                "chord2": {
                    "name": this.state.yourChords.chord2.name,
                    "audio": "",
                    "img": ""
                },
                "chord3": {
                    "name": this.state.yourChords.chord3.name,
                    "audio": "",
                    "img": ""
                },
                "chord4": {
                    "name": this.state.yourChords.chord4.name,
                    "audio": "",
                    "img": ""
                }
            }
        })
    }

    handleChord2Change = evt => {
        this.setState({
            yourChords: {
                "chord1": {
                    "name": this.state.yourChords.chord1.name,
                    "audio": "",
                    "img": ""
                },
                "chord2": {
                    "name": evt.target.value,
                    "audio": "",
                    "img": ""
                },
                "chord3": {
                    "name": this.state.yourChords.chord3.name,
                    "audio": "",
                    "img": ""
                },
                "chord4": {
                    "name": this.state.yourChords.chord4.name,
                    "audio": "",
                    "img": ""
                }
            }
        })
    }

    handleChord3Change = evt => {
        this.setState({
            yourChords: {
                "chord1": {
                    "name": this.state.yourChords.chord1.name,
                    "audio": "",
                    "img": ""
                },
                "chord2": {
                    "name": this.state.yourChords.chord2.name,
                    "audio": "",
                    "img": ""
                },
                "chord3": {
                    "name": evt.target.value,
                    "audio": "",
                    "img": ""
                },
                "chord4": {
                    "name": this.state.yourChords.chord4.name,
                    "audio": "",
                    "img": ""
                }
            }
        })
    }

    handleChord4Change = evt => {
        this.setState({
            yourChords: {
                "chord1": {
                    "name": this.state.yourChords.chord1.name,
                    "audio": "",
                    "img": ""
                },
                "chord2": {
                    "name": this.state.yourChords.chord2.name,
                    "audio": "",
                    "img": ""
                },
                "chord3": {
                    "name": this.state.yourChords.chord3.name,
                    "audio": "",
                    "img": ""
                },
                "chord4": {
                    "name": evt.target.value,
                    "audio": "",
                    "img": ""
                }
            }
        })
    }

    componentDidMount = () => {
        DataManager.getData.getKey(1)
            .then(res => this.setState({ currentKey: res }))
    }

    render() {
        const chord = this.state.currentKey.chords


        return (
            <div>
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
                        <h4 className="is-size-4">Available Chords</h4>
                        {
                            <div className="">
                                <p>{chord[0].name}</p>
                                <p>{chord[1].name}</p>
                                <p>{chord[2].name}</p>
                                <p>{chord[3].name}</p>
                                <p>{chord[4].name}</p>
                                <p>{chord[5].name}</p>
                                <p>{chord[6].name}</p>
                            </div>
                        }
                    </div>
                    <h4 className="is-size-4 has-text-centered">Your Chords</h4>
                    <div className="columns">
                        <div className="column">
                            <select name="chord1" id="chord1" onChange={this.handleChord1Change}>
                                <option value={chord[0].name}>{chord[0].name}</option>
                                <option value={chord[1].name}>{chord[1].name}</option>
                                <option value={chord[2].name}>{chord[2].name}</option>
                                <option value={chord[3].name}>{chord[3].name}</option>
                                <option value={chord[4].name}>{chord[4].name}</option>
                                <option value={chord[5].name}>{chord[5].name}</option>
                                <option value={chord[6].name}>{chord[6].name}</option>
                            </select>
                            <p>{this.state.yourChords.chord1.name.chord1}</p>
                            <ChordDisplayer.Chord1Displayer yourChords={this.state.yourChords} {...this.props}/>
                        </div>
                        <div className="column">
                            <select name="chord2" id="chord2" onChange={this.handleChord2Change}>
                                <option value={chord[0].name}>{chord[0].name}</option>
                                <option value={chord[1].name}>{chord[1].name}</option>
                                <option value={chord[2].name}>{chord[2].name}</option>
                                <option value={chord[3].name}>{chord[3].name}</option>
                                <option value={chord[4].name}>{chord[4].name}</option>
                                <option value={chord[5].name}>{chord[5].name}</option>
                                <option value={chord[6].name}>{chord[6].name}</option>
                            </select>
                            <p>{this.state.yourChords.chord2.name.chord2}</p>
                            <ChordDisplayer.Chord2Displayer yourChords={this.state.yourChords} {...this.props}/>
                        </div>
                        <div className="column">
                            <select name="chord3" id="chord3" onChange={this.handleChord3Change}>
                                <option value={chord[0].name}>{chord[0].name}</option>
                                <option value={chord[1].name}>{chord[1].name}</option>
                                <option value={chord[2].name}>{chord[2].name}</option>
                                <option value={chord[3].name}>{chord[3].name}</option>
                                <option value={chord[4].name}>{chord[4].name}</option>
                                <option value={chord[5].name}>{chord[5].name}</option>
                                <option value={chord[6].name}>{chord[6].name}</option>
                            </select>
                            <p>{this.state.yourChords.chord3.name.chord3}</p>
                            <ChordDisplayer.Chord3Displayer yourChords={this.state.yourChords} {...this.props}/>
                        </div>
                        <div className="column">
                            <select name="chord4" id="chord4" onChange={this.handleChord4Change}>
                                <option value={chord[0].name}>{chord[0].name}</option>
                                <option value={chord[1].name}>{chord[1].name}</option>
                                <option value={chord[2].name}>{chord[2].name}</option>
                                <option value={chord[3].name}>{chord[3].name}</option>
                                <option value={chord[4].name}>{chord[4].name}</option>
                                <option value={chord[5].name}>{chord[5].name}</option>
                                <option value={chord[6].name}>{chord[6].name}</option>
                            </select>
                            <p>{this.state.yourChords.chord4.name.chord4}</p>
                            <ChordDisplayer.Chord4Displayer yourChords={this.state.yourChords} {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}