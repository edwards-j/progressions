import React, { Component } from 'react'
import DataManager from '../../modules/DataManager'
import './ChordDisplayer'
import './NewSong.css'
import UserSS from '../../modules/userSS'
import Major from './Major'
import Minor from './Minor'
import Audio from './Audio'
import LyricGenerator from './LyricGenerator'

export default class NewSong extends Component {
    state = {
        title: "",
        selectedKey: "---",
        MajorMinor: "---",
        chord1: "",
        chord2: "",
        chord3: "",
        chord4: "",
        lyrics: "",
        description: "",
        public: false,
        modal: false

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

    handlePublic = () => (this.state.public) ? this.setState({ public: false }) : this.setState({ public: true })

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    showModal = () => {
        this.setState({ modal: true })
    }

    hideModal = () => {
        this.setState({ modal: false })
    }

    constructNewSong = () => {
        const newSong = {
            userId: UserSS.loadUserIDFromSS(),
            username: UserSS.loadUserNameFromSS(),
            selectedKey: this.state.selectedKey,
            MajorMinor: this.state.MajorMinor,
            title: this.state.title,
            chord1: this.state.chord1,
            chord2: this.state.chord2,
            chord3: this.state.chord3,
            chord4: this.state.chord4,
            lyrics: this.state.lyrics,
            description: this.state.description,
            public: this.state.public
        }
        this.props.addSong(newSong)
            .then(() => this.props.history.push("/your-songs"))
    }

    render() {
        let down = false;
        let playAudio = (e) => {

            const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

            if (!audio) {
                return; //Stops function from running if you press an invalid key
            };

            if (down) return;
            down = true;

            audio.currentTime = 0;  //rewind audio to start each time the key is pressed

            audio.play(); //Plays audio
            key.classList.add("playing") //Adds styles to the pressed key
        };

        let stopAudio = (e) => {
            const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

            if (!audio) {
                return; //Stops function from running if you press an invalid key
            };

            down = false
            key.classList.remove("playing")

            audio.pause(); //Stops audio
            audio.currentTime = 0;  //rewind audio to start each time the key is pressed
        };


        function removeTransition(e) {
            if (e.propertyName !== 'transform') { return } //Stops function if you press an invalid key
            // this.classList.remove("playing") //Removes styles after the transition has ended
        }

        const keys = document.querySelectorAll(".key");

        window.addEventListener("keydown", playAudio) //Listens for key presses 
        window.addEventListener("keyup", stopAudio) //Listens for key presses 

        keys.forEach(key =>
            key.addEventListener('transitionend', removeTransition)
        )

        return (
            <div>
                <div className="">
                    <div className="columns">
                        <div className="column is-2 is-offset-5">
                            <h4 className="is-size-4 has-text-centered new-song-title">Song Title</h4>
                            <input className="titleInput input is-rounded" type="text" id="title" placeholder="Enter Song Title" onChange={this.handleFieldChange} /><br />
                        </div>
                    </div>
                    <h2 className="is-size-2 has-text-centered">{this.state.title}</h2>

                </div>
                <div className="has-text-centered keySelector">
                    Select Key:
                <select name="selectedKey" id="selectedKey" onChange={this.handleFieldChange}>
                        <option value="---">---</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                    <select name="MajorMinor" id="MajorMinor" onChange={this.handleFieldChange}>
                        <option value="---">---</option>
                        <option value="major">Major</option>
                        <option value="minor">Minor</option>
                    </select>
                </div>

                <div className="">
                    {(this.state.selectedKey === "---") ?
                        <div className="availableChords ">
                            <h4 className="is-size-4 has-text-centered">Available Chords</h4>
                            <div className="container is-gapless">
                                <div className="columns">
                                    <div data-key="49" className="key column has-text-centered chord1 emptyColors"></div>
                                    <div data-key="50" className="key column has-text-centered chord2 emptyColors"></div>
                                    <div data-key="51" className="key column has-text-centered chord3 emptyColors"></div>
                                    <div data-key="52" className="key column has-text-centered chord4 emptyColors"></div>
                                    <div data-key="53" className="key column has-text-centered chord5 emptyColors"></div>
                                    <div data-key="54" className="key column has-text-centered chord6 emptyColors"></div>
                                    <div data-key="55" className="key column has-text-centered chord7 emptyColors"></div>
                                </div>
                            </div>
                            <h4 className="is-size-4 has-text-centered emptyChords">Your Chords</h4>
                            <div>
                                <div className="container">
                                    <div className="columns">
                                        <div className="chord has-text-centered column yourChord1">
                                            <select name="chord1" id="chord1" onChange={this.props.handleChord1Change}>
                                                <option value="---">---</option>
                                            </select>
                                        </div>
                                        <div className="chord has-text-centered column yourChord2">
                                            <select name="chord2" id="chord2" onChange={this.props.handleChord2Change}>
                                                <option value="---">---</option>
                                            </select>
                                        </div>
                                        <div className="chord has-text-centered column yourChord3">
                                            <select name="chord3" id="chord3" onChange={this.props.handleChord3Change}>
                                                <option value="---">---</option>
                                            </select>
                                        </div>
                                        <div className="chord has-text-centered column yourChord4">
                                            <select name="chord4" id="chord4" onChange={this.props.handleChord4Change}>
                                                <option value="---">---</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        :
                        <div>
                            {(this.state.MajorMinor === "major") ?
                                <Major
                                    chord1={this.state.chord1}
                                    chord2={this.state.chord2}
                                    chord3={this.state.chord3}
                                    chord4={this.state.chord4}
                                    handleChord1Change={this.handleChord1Change}
                                    handleChord2Change={this.handleChord2Change}
                                    handleChord3Change={this.handleChord3Change}
                                    handleChord4Change={this.handleChord4Change}
                                    selectedKey={this.state.selectedKey}
                                    MajorMinor={this.state.MajorMinor} />
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
                                    selectedKey={this.state.selectedKey}
                                    MajorMinor={this.state.MajorMinor} />
                            }
                        </div>
                    }

                </div>
                <div className="lyrics">
                    <h4 className="is-size-4 has-text-centered">Lyrics</h4>
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            <textarea className="textarea lyricInput" id="lyrics" rows="10" cols="20" onChange={this.handleFieldChange} />
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <p>Need some help with those lyrics?</p>
                        <button className="button is-rounded lyricHelperButton" onClick={this.showModal}>Click Here</button>
                        <LyricGenerator
                            modal={this.state.modal}
                            hideModal={this.hideModal}
                        />
                    </div>
                </div>
                <div className="has-text-centered">

                    <h4 className="is-size-4">Song Description</h4>
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            <input className="input is-rounded descInput" type="text" id="description" onChange={this.handleFieldChange} /><br />
                        </div>
                    </div>
                    <div className="saveNewSong">
                        <label for="public" className="has-text-weight-semibold	">Make song public? </label>
                        <input type="checkbox" id="public" onChange={this.handlePublic} /><br />
                        <button className="saveButton button is-outlined has-text-weight-bold	" onClick={this.constructNewSong}>Save Song</button>
                    </div>
                </div>

                <div>
                    <Audio
                        selectedKey={this.state.selectedKey}
                        MajorMinor={this.state.MajorMinor}
                    />
                </div>
            </div>
        )
    }
}