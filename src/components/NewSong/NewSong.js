import React, { Component } from 'react'
import DataManager from '../../modules/DataManager'
import './ChordDisplayer'
import './NewSong.css'
import UserSS from '../../modules/userSS'
import Major from './Major'
import Minor from './Minor'

export default class NewSong extends Component {
    state = {
        title: "",
        selectedKey: "C",
        MajorMinor: "major",
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
            selectedKey: this.state.selectedKey,
            MajorMinor: this.state.MajorMinor,
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
            if (e.propertyName !== 'transform') { return } //Stops function if you press an invalid key
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
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <select name="MajorMinor" id="MajorMinor" onChange={this.handleFieldChange}>
                    <option value="major">Major</option>
                    <option value="minor">Minor</option>
                </select>

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