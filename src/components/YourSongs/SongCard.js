import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
import './SongCard.css'

import { zoomOut } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    zoomOut: {
        animation: 'x .75s',
        animationName: Radium.keyframes(zoomOut, 'zoomOut')
    }
}


export default class SongCard extends Component {

    render() {
        let delayRemove = () => {
        this.props.deleteSong(this.props.song.id)
        document.querySelector(`#songCard--${this.props.song.id}`).classList.remove("animated", "zoomOut")
        }

        let removeSong = event => {
            let div = document.querySelector(`#songCard--${this.props.song.id}`)
            let divID = div.id.split("--")[1]
            let buttonId = event.target.id.split("--")[1]

            if (buttonId === divID) {
                document.querySelector(`#songCard--${this.props.song.id}`).classList.add("animated", "zoomOut")
                window.setTimeout(delayRemove, 500);
            }
        }

        return (
            <StyleRoot id={`songCard--${this.props.song.id}`} className="animated fadeIn">
                <Tilt className="Tilt song-card" options={{ scale: 1.03, max: 10 }}  >
                    <div className="Tilt-inner" >
                        <div className="card-title">
                            <h5 className="is-size-5 has-text-white">{this.props.song.title}</h5>
                            <a className="delete-button" onClick={removeSong}><i id={`delete--${this.props.song.id}`}  className="fas fa-trash-alt"></i></a>
                        </div>
                        <div className="card-body">
                            <p className="card-description">{this.props.song.description}</p>
                            <div className="has-text-centered">
                                <Link className="detail-button button is-small is-rounded" to={`/your-songs/${this.props.song.id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </StyleRoot>
        )
    }
}