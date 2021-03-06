import React, { Component } from 'react'
import DataManager from '../../modules/DataManager'
import './ChordDisplayer'
import './NewSong.css'
import UserSS from '../../modules/userSS'
import Major from './Major'
import Minor from './Minor'
import Audio from './Audio'
import LyricGenerator from './LyricGenerator'
import SaveSongModal from './SaveSongModal'
import './ProgressBar.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { pulse } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

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
        lyricModal: false,
        saveSongModal: false,
        progress: 0,
        titleEmpty: true,
        keyEmpty: true,
        majminEmpty: true,
        lyricsEmpty: true,
        descEmpty: true,
        chord1Empty: true,
        chord2Empty: true,
        chord3Empty: true,
        chord4Empty: true,
        noKey: true,
        toastCount: 0,
        toastDisplayed: true
    }

    handleKeyChange = evt => {
        DataManager.getData.getKey(evt.target.value)
            .then(res => this.setState({ currentKey: res }))
            .then(() => this.setState({
                "chord1": "",
                "chord2": "",
                "chord3": "",
                "chord4": "",
            }))
    }

    handleChord1Change = evt => {
        if (this.state.chord1Empty === true) {
            this.setState({
                "chord1": evt.target.value,
                "chord2": this.state.chord2,
                "chord3": this.state.chord3,
                "chord4": this.state.chord4,
                "progress": this.state.progress + 11,
                "chord1Empty": false
            })
        } else if (evt.target.value === "---") {
            this.setState({
                "chord1": evt.target.value,
                "chord2": this.state.chord2,
                "chord3": this.state.chord3,
                "chord4": this.state.chord4,
                "progress": this.state.progress - 11,
                "chord1Empty": true
            })
        } else {
            this.setState({
                "chord1": evt.target.value,
                "chord2": this.state.chord2,
                "chord3": this.state.chord3,
                "chord4": this.state.chord4,
            })
        }
    }

    handleChord2Change = evt => {
        if (this.state.chord2Empty === true) {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": evt.target.value,
                "chord3": this.state.chord3,
                "chord4": this.state.chord4,
                "progress": this.state.progress + 11,
                "chord2Empty": false
            })
        } else if (evt.target.value === "---") {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": evt.target.value,
                "chord3": this.state.chord3,
                "chord4": this.state.chord4,
                "progress": this.state.progress - 11,
                "chord2Empty": true
            })
        } else {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": evt.target.value,
                "chord3": this.state.chord3,
                "chord4": this.state.chord4,
            })
        }
    }

    handleChord3Change = evt => {
        if (this.state.chord3Empty === true) {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": this.state.chord2,
                "chord3": evt.target.value,
                "chord4": this.state.chord4,
                "progress": this.state.progress + 11,
                "chord3Empty": false
            })
        } else if (evt.target.value === "---") {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": this.state.chord2,
                "chord3": evt.target.value,
                "chord4": this.state.chord4,
                "progress": this.state.progress - 11,
                "chord3Empty": true
            })
        } else {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": this.state.chord2,
                "chord3": evt.target.value,
                "chord4": this.state.chord4,
            })
        }
    }

    handleChord4Change = evt => {
        if (this.state.chord4Empty === true) {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": this.state.chord2,
                "chord3": this.state.chord3,
                "chord4": evt.target.value,
                "progress": this.state.progress + 11,
                "chord4Empty": false
            })
        } else if (evt.target.value === "---") {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": this.state.chord2,
                "chord3": this.state.chord3,
                "chord4": evt.target.value,
                "progress": this.state.progress - 11,
                "chord4Empty": true
            })
        } else {
            this.setState({
                "chord1": this.state.chord1,
                "chord2": this.state.chord2,
                "chord3": this.state.chord3,
                "chord4": evt.target.value,
            })
        }
    }

    handlePublic = () => (this.state.public) ? this.setState({ public: false }) : this.setState({ public: true })

    handleFieldChange = evt => {
        if (evt.target.id === "title" && this.state.titleEmpty === true) {
            this.setState({
                "titleEmpty": false,
                "progress": this.state.progress + 11
            })
        } else if (evt.target.id === "title" && evt.target.value === "") {
            this.setState({
                "titleEmpty": true,
                "progress": this.state.progress - 11
            })
        } else if (evt.target.id === "selectedKey" && this.state.keyEmpty === true) {
            this.setState({
                "keyEmpty": false,
                "progress": this.state.progress + 11
            })
        } else if (evt.target.id === "selectedKey" && evt.target.value === "---") {
            this.setState({
                "keyEmpty": true,
                "progress": this.state.progress - 11
            })
        } else if (evt.target.id === "MajorMinor" && this.state.majminEmpty === true) {
            this.setState({
                "majminEmpty": false,
                "progress": this.state.progress + 11
            })
        } else if (evt.target.id === "MajorMinor" && evt.target.value === "---") {
            this.setState({
                "majminEmpty": true,
                "progress": this.state.progress - 11
            })
        } else if (evt.target.id === "lyrics" && this.state.lyricsEmpty === true) {
            this.setState({
                "lyricsEmpty": false,
                "progress": this.state.progress + 11
            })
        } else if (evt.target.id === "lyrics" && evt.target.value === "") {
            this.setState({
                "lyricsEmpty": true,
                "progress": this.state.progress - 11
            })
        } else if (evt.target.id === "description" && this.state.descEmpty === true) {
            this.setState({
                "descEmpty": false,
                "progress": this.state.progress + 12
            })
        } else if (evt.target.id === "description" && evt.target.value === "") {
            this.setState({
                "descEmpty": true,
                "progress": this.state.progress - 12
            })
        }

        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    showLyricModal = () => {
        this.setState({ lyricModal: true })
    }

    hideLyricModal = () => {
        this.setState({ lyricModal: false })
    }

    showSaveSongModal = () => {
        this.setState({ saveSongModal: true })
    }

    hideSaveSongModal = () => {
        this.setState({
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
            lyricModal: false,
            saveSongModal: false,
            progress: 0
        })
        window.scrollTo(0, 0)
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
            .then(() => this.showSaveSongModal())
    }

    displayToast = () => {
        if (!this.state.toastDisplayed) {
            this.setState({ toastDisplayed: true })
            return (
                toast.info(`Want to hear what the chords sound like? Press keys 1-7 on your keyboard to hear an audio clip. Go ahead, try it out!`, {
                    position: "bottom-center",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
            )
        } else {
            return <div></div>
        }
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

        let progress;
        if (this.state.progress < 100) {
            progress = {
                width: this.state.progress + "%",
                maxWidth: "100%",
                transition: "width .65s",
                transitionTimingFunction: "cubic-bezier(.46,-0.36,.61,1.47)",
                background: "linear-gradient(to right, #5433FF, #33C6F7, #A4FEC9)"
            }
        } else {
            progress = {
                width: this.state.progress + "%",
                maxWidth: "100%",
                transition: "width .65s",
                transitionTimingFunction: "cubic-bezier(.46,-0.36,.61,1.47)",
                background: "#5FFF4C"
            }
        }

        let progressText;
        if (this.state.progress < 100) {
            progressText = {
                color: "hsl(0, 0%, 71%)"
            }
        } else {
            progressText = {
                color: "hsl(0, 0%, 29%)",
                animation: 'x .75s',
                animationName: Radium.keyframes(pulse, 'pulse'),
                animationIterationCount: "infinite"
            }
        }

        if (!this.state.keyEmpty && !this.state.majminEmpty && this.state.toastCount < 1) {
            this.setState({ toastDisplayed: false })
            this.setState({ toastCount: + 1 })
        }

        return (
            <div>
                {this.displayToast()}
                <div className="progress-section column is-6 is-offset-3">
                    <StyleRoot><p className="has-text-centered" style={progressText}>Your song is {this.state.progress}% complete</p></StyleRoot>
                    <div class="meter">
                        <span style={progress}></span>
                    </div>
                </div>
                <div>
                    <div className="columns">
                        <div className="column is-2 is-offset-5">
                            <h4 className="is-size-4 has-text-centered new-song-title">Song Title</h4>
                            <input className="titleInput input is-rounded" type="text" id="title" placeholder="Enter Song Title" onChange={this.handleFieldChange} value={this.state.title} /><br />
                        </div>
                    </div>
                    {/* <h2 className="is-size-2 has-text-centered">{this.state.title}</h2> */}
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
                    {(this.state.MajorMinor === "---" || this.state.selectedKey === "---") ?
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
                            <textarea className="textarea lyricInput" id="lyrics" rows="10" cols="20" onChange={this.handleFieldChange} value={this.state.lyrics} />
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <p>Need some help with those lyrics?</p>
                        <button className="button is-rounded lyricHelperButton" onClick={this.showLyricModal}>Click Here</button>
                        <LyricGenerator
                            modal={this.state.lyricModal}
                            hideModal={this.hideLyricModal}
                        />
                    </div>
                </div>
                <div className="has-text-centered">

                    <h4 className="is-size-4">Song Description</h4>
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            <input className="input is-rounded descInput" type="text" id="description" placeholder="A few words describing what this song is about" onChange={this.handleFieldChange} value={this.state.description} /><br />
                        </div>
                    </div>
                    <div className="saveNewSong">
                        <label for="public" className="has-text-weight-semibold	">Make song public? </label>
                        <input type="checkbox" id="public" onChange={this.handlePublic} defaultChecked={false} /><br />
                        <button className="saveButton button is-outlined has-text-weight-bold" onClick={this.constructNewSong}>Save Song</button>
                        <SaveSongModal
                            modal={this.state.saveSongModal}
                            hideSaveSongModal={this.hideSaveSongModal}
                        />
                    </div>
                </div>

                <div>
                    <Audio
                        selectedKey={this.state.selectedKey}
                        MajorMinor={this.state.MajorMinor}
                    />
                </div>
                <ToastContainer position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover />
            </div>
        )
    }
}