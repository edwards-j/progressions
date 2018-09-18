import React, { Component } from 'react'
import DataManager from '../../modules/DataManager'
import './LyricGenerator.css'
import { Modal, ModalBackground, ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle, Button} from 'bloomer'

export default class LyricGenerator extends Component {
    state = {
        lyrics: "(Click that button in the bottom left corner to get those create juices flowing)"
    }


    newLyrics = () => {
        DataManager.getData.getRandomLyrics()
            .then(res => {
                const randomNumber = Math.floor(Math.random() * res.length);
                const newLyric = res[randomNumber]
                this.setState({ lyrics: newLyric.words })
            })

    }


    render() {
        return (
            <div>
                {(this.props.modal) ?
                    <Modal isActive>
                        <ModalBackground />
                        <ModalCard>
                            <ModalCardHeader>
                                <div>
                                    <ModalCardTitle className="modal-title">Random Lyric Generator</ModalCardTitle>
                                    <p>Sometimes the hardest part of writing a song is coming up with lyrics that don't suck. Hopefully these will spark some inspiration, or atleast give you a laugh.</p>
                                    <p className="modal-intructions">If any of these lyrics tickle your fancy, feel free to copy and paste the words into the lyrics section of your song</p>
                                </div>
                            </ModalCardHeader>
                            <ModalCardBody>
                                <p className="has-text-grey is-size-6 is-italic">{this.state.lyrics}</p>
                            </ModalCardBody>
                            <ModalCardFooter className="modal-buttons">
                                <Button className="try-again-button is-rounded" onClick={this.newLyrics}>Gimme some lyrics</Button>
                                <Button className="close-button is-rounded" onClick={this.props.hideModal}>Close</Button>
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
