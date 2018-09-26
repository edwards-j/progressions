import React, { Component } from 'react'
import Ab from "../../audio/maj/Ab.wav"
import A from "../../audio/maj/A.wav"
import B from "../../audio/maj/B.wav"
import Bb from "../../audio/maj/Bb.wav"
import C from "../../audio/maj/C.wav"
import D from "../../audio/maj/D.wav"
import Eb from "../../audio/maj/Eb.wav"
import E from "../../audio/maj/E.wav"
import F from "../../audio/maj/F.wav"
import G from "../../audio/maj/G.wav"
import Am from "../../audio/mi/Am.wav"
import Bm from "../../audio/mi/Bm.wav"
import Cm from "../../audio/mi/Cm.wav"
import Csharpm from "../../audio/mi/C#m.wav"
import Dm from "../../audio/mi/Dm.wav"
import Dsharpm from "../../audio/mi/D#m.wav"
import Em from "../../audio/mi/Em.wav"
import Fsharp from "../../audio/maj/F#.wav"
import Fsharpm from "../../audio/mi/F#m.wav"
import Fm from "../../audio/mi/Fm.wav"
import Gsharpm from "../../audio/mi/G#m.wav"
import Gm from "../../audio/mi/Gm.wav"
import Asharpdim from "../../audio/dim/A#dim.wav"
import Bdim from "../../audio/dim/Bdim.wav"
import Csharpdim from "../../audio/dim/C#dim.wav"
import Ddim from "../../audio/dim/Ddim.wav"
import Dsharpdim from "../../audio/dim/D#dim.wav"
import Edim from "../../audio/dim/Edim.wav"
import Fsharpdim from "../../audio/dim/F#dim.wav"
import Gsharpdim from "../../audio/dim/G#dim.wav"
import clap from "../../audio/clap.mp3"

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
    } else if (selectedKey === "D" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={D}></audio>
            <audio data-key="50" src={Em}></audio>
            <audio data-key="51" src={Fsharpm}></audio>
            <audio data-key="52" src={G}></audio>
            <audio data-key="53" src={A}></audio>
            <audio data-key="54" src={Bm}></audio>
            <audio data-key="55" src={Csharpdim}></audio>
        </div>
    } else if (selectedKey === "E" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={E}></audio>
            <audio data-key="50" src={Fsharpm}></audio>
            <audio data-key="51" src={Gsharpm}></audio>
            <audio data-key="52" src={A}></audio>
            <audio data-key="53" src={B}></audio>
            <audio data-key="54" src={Csharpm}></audio>
            <audio data-key="55" src={Dsharpdim}></audio>
        </div>
    } else if (selectedKey === "F" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={F}></audio>
            <audio data-key="50" src={Gm}></audio>
            <audio data-key="51" src={Am}></audio>
            <audio data-key="52" src={Bb}></audio>
            <audio data-key="53" src={C}></audio>
            <audio data-key="54" src={Dm}></audio>
            <audio data-key="55" src={Edim}></audio>
        </div>
    } else if (selectedKey === "G" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={G}></audio>
            <audio data-key="50" src={Am}></audio>
            <audio data-key="51" src={Bm}></audio>
            <audio data-key="52" src={C}></audio>
            <audio data-key="53" src={D}></audio>
            <audio data-key="54" src={Em}></audio>
            <audio data-key="55" src={Fsharpdim}></audio>
        </div>
    } else if (selectedKey === "A" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={A}></audio>
            <audio data-key="50" src={Bm}></audio>
            <audio data-key="51" src={Csharpm}></audio>
            <audio data-key="52" src={D}></audio>
            <audio data-key="53" src={E}></audio>
            <audio data-key="54" src={Fsharpm}></audio>
            <audio data-key="55" src={Gsharpdim}></audio>
        </div>
    } else if (selectedKey === "B" && MajorMinor === "major") {
        return <div>
            <audio data-key="49" src={A}></audio>
            <audio data-key="50" src={Csharpm}></audio>
            <audio data-key="51" src={Dsharpm}></audio>
            <audio data-key="52" src={E}></audio>
            <audio data-key="53" src={Fsharp}></audio>
            <audio data-key="54" src={Gsharpm}></audio>
            <audio data-key="55" src={Asharpdim}></audio>
        </div>
    } else if (selectedKey === "C" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Cm}></audio>
            <audio data-key="50" src={Ddim}></audio>
            <audio data-key="51" src={Eb}></audio>
            <audio data-key="52" src={Fm}></audio>
            <audio data-key="53" src={Gm}></audio>
            <audio data-key="54" src={Ab}></audio>
            <audio data-key="55" src={Bb}></audio>
        </div>
    } else if (selectedKey === "D" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Dm}></audio>
            <audio data-key="50" src={Edim}></audio>
            <audio data-key="51" src={F}></audio>
            <audio data-key="52" src={Gm}></audio>
            <audio data-key="53" src={Am}></audio>
            <audio data-key="54" src={Bb}></audio>
            <audio data-key="55" src={C}></audio>
        </div>
    } else if (selectedKey === "E" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Em}></audio>
            <audio data-key="50" src={Fsharpdim}></audio>
            <audio data-key="51" src={G}></audio>
            <audio data-key="52" src={Am}></audio>
            <audio data-key="53" src={Bm}></audio>
            <audio data-key="54" src={C}></audio>
            <audio data-key="55" src={D}></audio>
        </div>
    } else if (selectedKey === "F" && MajorMinor === "minor") {
        return <div>
            {/* <audio data-key="49" src={Fm}></audio>
            <audio data-key="50" src={Gdim}></audio>
            <audio data-key="51" src={Ab}></audio>
            <audio data-key="52" src={Bbm}></audio>
            <audio data-key="53" src={Cm}></audio>
            <audio data-key="54" src={Db}></audio>
            <audio data-key="55" src={Eb}></audio> */}
        </div>
    } else if (selectedKey === "G" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Gm}></audio>
            {/* <audio data-key="50" src={Adim}></audio> */}
            <audio data-key="51" src={Bb}></audio>
            <audio data-key="52" src={Cm}></audio>
            <audio data-key="53" src={Dm}></audio>
            <audio data-key="54" src={Eb}></audio>
            <audio data-key="55" src={F}></audio>
        </div>
    } else if (selectedKey === "A" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Am}></audio>
            <audio data-key="50" src={Bdim}></audio>
            <audio data-key="51" src={C}></audio>
            <audio data-key="52" src={Dm}></audio>
            <audio data-key="53" src={Em}></audio>
            <audio data-key="54" src={F}></audio>
            <audio data-key="55" src={G}></audio>
        </div>
    } else if (selectedKey === "B" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Bm}></audio>
            <audio data-key="50" src={Csharpdim}></audio>
            <audio data-key="51" src={D}></audio>
            <audio data-key="52" src={Em}></audio>
            <audio data-key="53" src={Fsharpm}></audio>
            <audio data-key="54" src={G}></audio>
            <audio data-key="55" src={A}></audio>
        </div>
    } else if (selectedKey === "A" && MajorMinor === "minor") {
        return <div>
            <audio data-key="49" src={Am}></audio>
            <audio data-key="50" src={Bdim}></audio>
            <audio data-key="51" src={C}></audio>
            <audio data-key="52" src={Dm}></audio>
            <audio data-key="53" src={Em}></audio>
            <audio data-key="54" src={F}></audio>
            <audio data-key="55" src={G}></audio>
        </div>
    }
    else {
        return <div></div>
    }
}

export default Audio
