import React, { Component } from 'react'
import ChordDisplayer from './ChordDisplayer';
import * as Scale from 'tonal-scale'

export default class Major extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h4 className="is-size-4 has-text-centered">Available Chords</h4>
                    <div className="columns has-text-centered is-gapless degrees">
                        <span className="column degree degree1">I</span>
                        <span className="column degree">ii</span>
                        <span className="column degree">iii</span>
                        <span className="column degree">IV</span>
                        <span className="column degree">V</span>
                        <span className="column degree">VI</span>
                        <span className="column degree">vii˚</span>
                    </div>
                    <div className="columns is-gapless">
                        <div data-key="49" className="key column has-text-centered chord1">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}</div>
                        <div data-key="50" className="key column has-text-centered chord2">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}m</div>
                        <div data-key="51" className="key column has-text-centered chord3">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}m</div>
                        <div data-key="52" className="key column has-text-centered chord4">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}</div>
                        <div data-key="53" className="key column has-text-centered chord5">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}</div>
                        <div data-key="54" className="key column has-text-centered chord6">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}m</div>
                        <div data-key="55" className="key column has-text-centered chord7">{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}dim</div>
                    </div>
                </div>
                <h4 className="is-size-4 has-text-centered">Your Chords</h4>
                <div>
                    <div className="your-chords columns">
                        <div className="chord has-text-centered column is-offset-3">
                            <select name="chord1" id="chord1" onChange={this.props.handleChord1Change}>
                                <option value="---">---</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}dim</option>


                            </select>
                            <ChordDisplayer.Chord1Displayer chord1={this.props.chord1} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord2" id="chord2" onChange={this.props.handleChord2Change}>
                                <option value="---">---</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}dim</option>
                            </select>
                            <ChordDisplayer.Chord2Displayer chord2={this.props.chord2} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord3" id="chord3" onChange={this.props.handleChord3Change}>
                                <option value="---">---</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}dim</option>
                            </select>
                            <ChordDisplayer.Chord3Displayer chord3={this.props.chord3} {...this.props} />
                        </div>
                        <div className="chord has-text-centered column">
                            <select name="chord4" id="chord4" onChange={this.props.handleChord4Change}>
                                <option value="---">---</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[0]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[1]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[2]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[3]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[4]}</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5] + "m"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[5]}m</option>
                                <option className="column has-text-centered" value={Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6] + "dim"}>{Scale.notes(this.props.selectedKey, this.props.MajorMinor)[6]}dim</option>
                            </select>
                            <ChordDisplayer.Chord4Displayer chord4={this.props.chord4} {...this.props} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}