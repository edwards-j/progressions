import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalBackground, ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle, Button } from 'bloomer'

export default class SaveSongModal extends Component {


    render() {
        return (
            <div>
                {(this.props.modal === true) ?
                    <Modal isActive className="animated fadeIn" style={{animationDuration: ".5s"}}>
                        <ModalBackground />
                        <ModalCard>
                            <ModalCardHeader className="has-text-centered">
                                <ModalCardTitle className="modal-title columns">
                                    <div className="column">
                                        <h4 className="is-size-4">Great job!</h4>
                                        <div class="save-icon--order-success svg ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                                                <g fill="none" stroke="#59D9E8" stroke-width="2">
                                                    <circle cx="36" cy="36" r="35" style={{ strokeDasharray: "240px, 240px", strokeDashoffset: "480px" }}></circle>
                                                    <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: "50px, 50px", strokeDashoffset: "0px" }}></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <span className="is-size-6 has-text-centered">Your song is awesome, I think even Jimi Hendrix would be jealous of this one.</span>
                                    </div>
                                </ModalCardTitle>
                            </ModalCardHeader>
                            <ModalCardBody>
                                <p className="has-text-grey is-size-6 ">Would you like to write another song or view all of your songs?</p>
                            </ModalCardBody>
                            <ModalCardFooter className="modal-buttons">
                                <Link to="/new-song" className="button try-again-button is-rounded" onClick={this.props.hideSaveSongModal}>Write Another</Link>
                                <Link to='/your-songs' className="button close-button is-rounded">View Your Songs</Link>
                            </ModalCardFooter>
                        </ModalCard>
                    </Modal>
                    :
                    <div></div>
                }
            </div>
        )
    }
}