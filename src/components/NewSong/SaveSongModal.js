import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Modal, ModalBackground, ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle, Button } from 'bloomer'

export default class SaveSongModal extends Component {


    render() {
        return (
            <div>
                {(this.props.modal === true) ?
                    <Modal isActive>
                        <ModalBackground />
                        <ModalCard>
                            <ModalCardHeader>
                                <div>
                                    <ModalCardTitle className="modal-title">Great job! Your song is awesome, I think even Jimi Hendrix would be jealous of this one</ModalCardTitle>
                                </div>
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