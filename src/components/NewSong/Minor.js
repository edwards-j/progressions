import React, { Component } from 'react'
import ChordDisplayer from './ChordDisplayer';
import * as Scale from 'tonal-scale'

export default class Minor extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="availableChords">
                    <h4 className="is-size-4 has-text-centered">Available Chords</h4>
                    <div className="container has-text-centered is-gapless degrees has-text-weight-semibold">
                        <div className="columns">
                            <span className="column">i</span>
                            <span className="column">ii˚</span>
                            <span className="column">III</span>
                            <span className="column">iv</span>
                            <span className="column">v</span>
                            <span className="column">VI</span>
                            <span className="column">VII</span>
                        </div>
                    </div>
                    <div className="container is-gapless">
                        <div className="columns">
                            <div data-key="49" className="is-marginless key column has-text-centered chord1">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}m</div>
                            <div data-key="50" className="is-marginless key column has-text-centered chord2">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}dim</div>
                            <div data-key="51" className="is-marginless key column has-text-centered chord3">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}</div>
                            <div data-key="52" className="is-marginless key column has-text-centered chord4">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}m</div>
                            <div data-key="53" className="is-marginless key column has-text-centered chord5">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}m</div>
                            <div data-key="54" className="is-marginless key column has-text-centered chord6">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}</div>
                            <div data-key="55" className="is-marginless key column has-text-centered chord7">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}</div>
                        </div>
                    </div>
                </div>
                <h4 className="is-size-4 has-text-centered">Your Chords</h4>
                <div>
                    <div className="container">
                        <div className="columns">
                            <div className="chord has-text-centered column yourChord1">
                                <select name="chord1" id="chord1" onChange={this.props.handleChord1Change}>
                                    <option value="---">---</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}dim</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}</option>


                                </select>
                                <ChordDisplayer.Chord1Displayer chord1={this.props.chord1} {...this.props} />
                            </div>
                            <div className="chord has-text-centered column yourChord2">
                                <select name="chord2" id="chord2" onChange={this.props.handleChord2Change}>
                                    <option value="---">---</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}dim</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}</option>
                                </select>
                                <ChordDisplayer.Chord2Displayer chord2={this.props.chord2} {...this.props} />
                            </div>
                            <div className="chord has-text-centered column yourChord3">
                                <select name="chord3" id="chord3" onChange={this.props.handleChord3Change}>
                                    <option value="---">---</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}dim</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}</option>
                                </select>
                                <ChordDisplayer.Chord3Displayer chord3={this.props.chord3} {...this.props} />
                            </div>
                            <div className="chord has-text-centered column yourChord4">
                                <select name="chord4" id="chord4" onChange={this.props.handleChord4Change}>
                                    <option value="---">---</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}dim</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}m</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}</option>
                                    <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}</option>
                                </select>
                                <ChordDisplayer.Chord4Displayer chord4={this.props.chord4} {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}