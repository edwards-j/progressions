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
        selectedKey: "C Major",
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

    constructNewSong = () => {
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
        this.props.addSong(newSong)
        .then(() => this.props.history.push("/your-songs"))
    }

    render() {
        let playAudio = (e) => {
            const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
            console.log(key)
        
            if (!key) {
                return; //Stops function from running if you press an invalid key
            };
            // if (!audio) {
            //     return; //Stops function from running if you press an invalid key
            // };

            // audio.currentTime = 0;  //rewind audio to start each time the key is pressed
        
            // audio.play(); //Plays audio
            key.classList.add("playing") //Adds styles to the pressed key
        };
        
        function removeTransition(e) {
            if (e.propertyName !== 'transform') {return} //Stops function if you press an invalid key
            this.classList.remove("playing") //Removes styles after the transition has ended
        }
        
        const keys = document.querySelectorAll(".key");
        
        window.addEventListener("keydown", playAudio) //Listens for key presses 
        
        keys.forEach(key =>
            key.addEventListener('transitionend', removeTransition) 
        )
        
        
        return (
            <div>
                <div className="has-text-centered">
                    <h2 className="is-size-2">{this.state.title}</h2>
                    <input type="text" id="title" placeholder="Enter Song Title" onChange={this.handleFieldChange} /><br />
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
                        <div className="columns keys">
                                <div data-key="49" className="key column has-text-centered chord1">{Key.chords(this.state.selectedKey)[0].split("7")}</div>
                                <div data-key="50" className="key column has-text-centered chord2">{Key.chords(this.state.selectedKey)[1].split("7")}</div>
                                <div data-key="51" className="key column has-text-centered chord3">{Key.chords(this.state.selectedKey)[2].split("7")}</div>
                                <div data-key="52" className="key column has-text-centered chord4">{Key.chords(this.state.selectedKey)[3].split("7")}</div>
                                <div data-key="53" className="key column has-text-centered chord5">{Key.chords(this.state.selectedKey)[4].split("7")}</div>
                                <div data-key="54" className="key column has-text-centered chord6">{Key.chords(this.state.selectedKey)[5].split("7")}</div>
                                <div data-key="55" className="key column has-text-centered chord7">{Key.chords(this.state.selectedKey)[6].split("7")}</div>
                            
                        </div>

                    </div>
                    <h4 className="is-size-4 has-text-centered">Your Chords</h4>
                    <div className="your-chords columns">
                        <div className="chord has-text-centered column is-offset-3">
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
                <button className="button is-info" onClick={this.constructNewSong}>Save Song</button>

            </div>
        )
    }
}