import React, { Component } from 'react'
import A from "../../audio/maj/A.mp3"
import B from "../../audio/maj/B.mp3"
import C from "../../audio/maj/C.mp3"
import D from "../../audio/maj/D.mp3"
import E from "../../audio/maj/E.mp3"
import F from "../../audio/maj/F.mp3"
import G from "../../audio/maj/G.mp3"
import Am from "../../audio/mi/Am.mp3"
import Bm from "../../audio/mi/Bm.mp3"
import Cm from "../../audio/mi/Cm.mp3"
import Dm from "../../audio/mi/Dm.mp3"
import Em from "../../audio/mi/Em.mp3"
import Fm from "../../audio/mi/Fm.mp3"
import Gm from "../../audio/mi/Gm.mp3"
import Adim from "../../audio/dim/Adim.mp3"
import Bdim from "../../audio/dim/Bdim.mp3"
import Cdim from "../../audio/dim/Cdim.mp3"
import Ddim from "../../audio/dim/Ddim.mp3"
import Edim from "../../audio/dim/Edim.mp3"
import Fdim from "../../audio/dim/Fdim.mp3"
import Gdim from "../../audio/dim/Gdim.mp3"

const Audio = ({ selectedKey, MajorMinor }) => {
    if (selectedKey === "C" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={C}></audio>
            <audio data-key="50" src={Dm}></audio>
            <audio data-key="51" src={Em}></audio>
            <audio data-key="52" src={F}></audio>
            <audio data-key="53" src={G}></audio>
            <audio data-key="54" src={Am}></audio>
            <audio data-key="55" src={Bdim}></audio>
        </div>
    } else {
        return
    }
}

export default Audio