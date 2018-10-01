//Purpose: Displays the chord charts for each of the selected chords 

import React from 'react'

import A from '../../img/png/A.png'
import Aflat from '../../img/png/A♭.png'
import Aflatmi from '../../img//png/A♭mi.png'
import Ami from '../../img/png/Ami.png'
import B from '../../img/png/B.png'
import Bflat from '../../img/png/B♭.png'
import Bflatmi from '../../img/png/B♭mi.png'
import Bmi from '../../img/png/Bmi.png'
import C from '../../img/png/C.png'
import Cmi from '../../img/png/Cmi.png'
import D from '../../img/png/D.png'
import Dflat from '../../img/png/D♭.png'
import Dflatmi from '../../img/png/D♭mi.png'
import Dmi from '../../img/png/Dmi.png'
import E from '../../img/png/E.png'
import Eflat from '../../img/png/E♭.png'
import Eflatmi from '../../img/png/E♭mi.png'
import Emi from '../../img/png/Emi.png'
import F from '../../img/png/F.png'
import Fsharp from '../../img/png/Fsharp.png'
import Fsharpmi from '../../img/png/Fsharpmi.png'
import Fmi from '../../img/png/Fmi.png'
import G from '../../img/png/G.png'
import Gmi from '../../img/png/Gmi.png'

import Asharpdim from '../../img/png/Asharpdim.png'
import Adim from '../../img/png/Adim.png'
import Bdim from '../../img/png/Bdim.png'
import Csharpdim from '../../img/png/Csharpdim.png'
import Csharpmi from '../../img/png/Csharpm.png'
import Dsharpdim from '../../img/png/Dsharpdim.png'
import Dsharpmi from '../../img/png/Dsharpm.png'
import Ddim from '../../img/png/Ddim.png'
import Edim from '../../img/png/Edim.png'
import Fsharpdim from '../../img/png/Fsharpdim.png'
import Gsharpdim from '../../img/png/Gsharpdim.png'
import Gsharpmi from '../../img/png/Gsharpm.png'
import Gdim from '../../img/png/Gdim.png'

import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    zoomIn: {
        animation: 'x .75s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}

const Chord1Displayer = ({ chord1 }) => {
    if (chord1 === "C") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={C} alt="C" /></StyleRoot>
    } else if (chord1 === "Cm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Cmi} alt="Cmi" /></StyleRoot>
    } else if (chord1 === "D") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={D} alt="D" /></StyleRoot>
    } else if (chord1 === "Db") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflat} alt="D♭" /></StyleRoot>
    } else if (chord1 === "Dbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflatmi} alt="D" /></StyleRoot>
    } else if (chord1 === "Dm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dmi} alt="Dmi" /></StyleRoot>
    } else if (chord1 === "E") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={E} alt="E" /></StyleRoot>
    } else if (chord1 === "Eb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflat} alt="E♭" /></StyleRoot>
    } else if (chord1 === "Ebm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflatmi} alt="E♭mi" /></StyleRoot>
    } else if (chord1 === "Em") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Emi} alt="Emi" /></StyleRoot>
    } else if (chord1 === "F") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={F} alt="F" /></StyleRoot>
    } else if (chord1 === "F#") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharp} alt="F#" /></StyleRoot>
    } else if (chord1 === "F#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpmi} alt="F#mi" /></StyleRoot>
    } else if (chord1 === "Fm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fmi} alt="Fmi" /></StyleRoot>
    } else if (chord1 === "G") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={G} alt="G" /></StyleRoot>
    } else if (chord1 === "Gm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gmi} alt="Gmi" /></StyleRoot>
    } else if (chord1 === "Ab") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflat} alt="Ab" /></StyleRoot>
    } else if (chord1 === "Abm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflatmi} alt="Ab" /></StyleRoot>
    } else if (chord1 === "A") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={A} alt="A" /></StyleRoot>
    } else if (chord1 === "Am") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ami} alt="Ami" /></StyleRoot>
    } else if (chord1 === "Bb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflat} alt="Bb" /></StyleRoot>
    } else if (chord1 === "Bbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflatmi} alt="Bb" /></StyleRoot>
    } else if (chord1 === "B") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={B} alt="B" /></StyleRoot>
    } else if (chord1 === "Bm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bmi} alt="Bmi" /></StyleRoot>
    } else if (chord1 === "A#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Asharpdim} alt="A#dim" /></StyleRoot>
    } else if (chord1 === "Adim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Adim} alt="Adim" /></StyleRoot>
    } else if (chord1 === "Bdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bdim} alt="Bdim" /></StyleRoot>
    } else if (chord1 === "C#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpdim} alt="C#dim" /></StyleRoot>
    } else if (chord1 === "C#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpmi} alt="C#m" /></StyleRoot>
    } else if (chord1 === "D#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpdim} alt="D#dim" /></StyleRoot>
    } else if (chord1 === "D#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpmi} alt="D#mi" /></StyleRoot>
    } else if (chord1 === "Ddim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ddim} alt="Ddim" /></StyleRoot>
    } else if (chord1 === "Edim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Edim} alt="Edim" /></StyleRoot>
    } else if (chord1 === "F#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpdim} alt="F#dim" /></StyleRoot>
    } else if (chord1 === "G#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpdim} alt="G#dim" /></StyleRoot>
    } else if (chord1 === "G#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpmi} alt="G#mi" /></StyleRoot>
    } else if (chord1 === "Gdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gdim} alt="Gdim" /></StyleRoot>
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord2Displayer = ({ chord2 }) => {
    if (chord2 === "C") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={C} alt="C" /></StyleRoot>
    } else if (chord2 === "Cm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Cmi} alt="Cmi" /></StyleRoot>
    } else if (chord2 === "D") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={D} alt="D" /></StyleRoot>
    } else if (chord2 === "Db") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflat} alt="D♭" /></StyleRoot>
    } else if (chord2 === "Dbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflatmi} alt="D" /></StyleRoot>
    } else if (chord2 === "Dm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dmi} alt="Dmi" /></StyleRoot>
    } else if (chord2 === "E") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={E} alt="E" /></StyleRoot>
    } else if (chord2 === "Eb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflat} alt="E♭" /></StyleRoot>
    } else if (chord2 === "Ebm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflatmi} alt="E♭mi" /></StyleRoot>
    } else if (chord2 === "Em") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Emi} alt="Emi" /></StyleRoot>
    } else if (chord2 === "F") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={F} alt="F" /></StyleRoot>
    } else if (chord2 === "F#") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharp} alt="F#" /></StyleRoot>
    } else if (chord2 === "F#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpmi} alt="F#mi" /></StyleRoot>
    } else if (chord2 === "Fm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fmi} alt="Fmi" /></StyleRoot>
    } else if (chord2 === "G") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={G} alt="G" /></StyleRoot>
    } else if (chord2 === "Gm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gmi} alt="Gmi" /></StyleRoot>
    } else if (chord2 === "Ab") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflat} alt="Ab" /></StyleRoot>
    } else if (chord2 === "Abm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflatmi} alt="Ab" /></StyleRoot>
    } else if (chord2 === "A") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={A} alt="A" /></StyleRoot>
    } else if (chord2 === "Am") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ami} alt="Ami" /></StyleRoot>
    } else if (chord2 === "Bb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflat} alt="Bb" /></StyleRoot>
    } else if (chord2 === "Bbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflatmi} alt="Bb" /></StyleRoot>
    } else if (chord2 === "B") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={B} alt="B" /></StyleRoot>
    } else if (chord2 === "Bm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bmi} alt="Bmi" /></StyleRoot>
    } else if (chord2 === "A#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Asharpdim} alt="A#dim" /></StyleRoot>
    } else if (chord2 === "Adim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Adim} alt="Adim" /></StyleRoot>
    } else if (chord2 === "Bdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bdim} alt="Bdim" /></StyleRoot>
    } else if (chord2 === "C#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpdim} alt="C#dim" /></StyleRoot>
    } else if (chord2 === "C#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpmi} alt="C#m" /></StyleRoot>
    } else if (chord2 === "D#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpdim} alt="D#dim" /></StyleRoot>
    } else if (chord2 === "D#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpmi} alt="D#mi" /></StyleRoot>
    } else if (chord2 === "Ddim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ddim} alt="Ddim" /></StyleRoot>
    } else if (chord2 === "Edim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Edim} alt="Edim" /></StyleRoot>
    } else if (chord2 === "F#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpdim} alt="F#dim" /></StyleRoot>
    } else if (chord2 === "G#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpdim} alt="G#dim" /></StyleRoot>
    } else if (chord2 === "G#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpmi} alt="G#mi" /></StyleRoot>
    } else if (chord2 === "Gdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gdim} alt="Gdim" /></StyleRoot>
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord3Displayer = ({ chord3 }) => {
    if (chord3 === "C") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={C} alt="C" /></StyleRoot>
    } else if (chord3 === "Cm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Cmi} alt="Cmi" /></StyleRoot>
    } else if (chord3 === "D") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={D} alt="D" /></StyleRoot>
    } else if (chord3 === "Db") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflat} alt="D♭" /></StyleRoot>
    } else if (chord3 === "Dbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflatmi} alt="D" /></StyleRoot>
    } else if (chord3 === "Dm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dmi} alt="Dmi" /></StyleRoot>
    } else if (chord3 === "E") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={E} alt="E" /></StyleRoot>
    } else if (chord3 === "Eb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflat} alt="E♭" /></StyleRoot>
    } else if (chord3 === "Ebm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflatmi} alt="E♭mi" /></StyleRoot>
    } else if (chord3 === "Em") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Emi} alt="Emi" /></StyleRoot>
    } else if (chord3 === "F") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={F} alt="F" /></StyleRoot>
    } else if (chord3 === "F#") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharp} alt="F#" /></StyleRoot>
    } else if (chord3 === "F#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpmi} alt="F#mi" /></StyleRoot>
    } else if (chord3 === "Fm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fmi} alt="Fmi" /></StyleRoot>
    } else if (chord3 === "G") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={G} alt="G" /></StyleRoot>
    } else if (chord3 === "Gm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gmi} alt="Gmi" /></StyleRoot>
    } else if (chord3 === "Ab") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflat} alt="Ab" /></StyleRoot>
    } else if (chord3 === "Abm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflatmi} alt="Ab" /></StyleRoot>
    } else if (chord3 === "A") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={A} alt="A" /></StyleRoot>
    } else if (chord3 === "Am") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ami} alt="Ami" /></StyleRoot>
    } else if (chord3 === "Bb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflat} alt="Bb" /></StyleRoot>
    } else if (chord3 === "Bbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflatmi} alt="Bb" /></StyleRoot>
    } else if (chord3 === "B") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={B} alt="B" /></StyleRoot>
    } else if (chord3 === "Bm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bmi} alt="Bmi" /></StyleRoot>
    } else if (chord3 === "A#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Asharpdim} alt="A#dim" /></StyleRoot>
    } else if (chord3 === "Adim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Adim} alt="Adim" /></StyleRoot>
    } else if (chord3 === "Bdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bdim} alt="Bdim" /></StyleRoot>
    } else if (chord3 === "C#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpdim} alt="C#dim" /></StyleRoot>
    } else if (chord3 === "C#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpmi} alt="C#m" /></StyleRoot>
    } else if (chord3 === "D#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpdim} alt="D#dim" /></StyleRoot>
    } else if (chord3 === "D#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpmi} alt="D#mi" /></StyleRoot>
    } else if (chord3 === "Ddim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ddim} alt="Ddim" /></StyleRoot>
    } else if (chord3 === "Edim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Edim} alt="Edim" /></StyleRoot>
    } else if (chord3 === "F#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpdim} alt="F#dim" /></StyleRoot>
    } else if (chord3 === "G#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpdim} alt="G#dim" /></StyleRoot>
    } else if (chord3 === "G#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpmi} alt="G#mi" /></StyleRoot>
    } else if (chord3 === "Gdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gdim} alt="Gdim" /></StyleRoot>
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord4Displayer = ({ chord4 }) => {
    if (chord4 === "C") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={C} alt="C" /></StyleRoot>
    } else if (chord4 === "Cm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Cmi} alt="Cmi" /></StyleRoot>
    } else if (chord4 === "D") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={D} alt="D" /></StyleRoot>
    } else if (chord4 === "Db") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflat} alt="D♭" /></StyleRoot>
    } else if (chord4 === "Dbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dflatmi} alt="D" /></StyleRoot>
    } else if (chord4 === "Dm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dmi} alt="Dmi" /></StyleRoot>
    } else if (chord4 === "E") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={E} alt="E" /></StyleRoot>
    } else if (chord4 === "Eb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflat} alt="E♭" /></StyleRoot>
    } else if (chord4 === "Ebm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Eflatmi} alt="E♭mi" /></StyleRoot>
    } else if (chord4 === "Em") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Emi} alt="Emi" /></StyleRoot>
    } else if (chord4 === "F") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={F} alt="F" /></StyleRoot>
    } else if (chord4 === "F#") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharp} alt="F#" /></StyleRoot>
    } else if (chord4 === "F#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpmi} alt="F#mi" /></StyleRoot>
    } else if (chord4 === "Fm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fmi} alt="Fmi" /></StyleRoot>
    } else if (chord4 === "G") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={G} alt="G" /></StyleRoot>
    } else if (chord4 === "Gm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gmi} alt="Gmi" /></StyleRoot>
    } else if (chord4 === "Ab") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflat} alt="Ab" /></StyleRoot>
    } else if (chord4 === "Abm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Aflatmi} alt="Ab" /></StyleRoot>
    } else if (chord4 === "A") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={A} alt="A" /></StyleRoot>
    } else if (chord4 === "Am") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ami} alt="Ami" /></StyleRoot>
    } else if (chord4 === "Bb") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflat} alt="Bb" /></StyleRoot>
    } else if (chord4 === "Bbm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bflatmi} alt="Bb" /></StyleRoot>
    } else if (chord4 === "B") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={B} alt="B" /></StyleRoot>
    } else if (chord4 === "Bm") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bmi} alt="Bmi" /></StyleRoot>
    } else if (chord4 === "A#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Asharpdim} alt="A#dim" /></StyleRoot>
    } else if (chord4 === "Adim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Adim} alt="Adim" /></StyleRoot>
    } else if (chord4 === "Bdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Bdim} alt="Bdim" /></StyleRoot>
    } else if (chord4 === "C#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpdim} alt="C#dim" /></StyleRoot>
    } else if (chord4 === "C#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Csharpmi} alt="C#m" /></StyleRoot>
    } else if (chord4 === "D#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpdim} alt="D#dim" /></StyleRoot>
    } else if (chord4 === "D#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Dsharpmi} alt="D#mi" /></StyleRoot>
    } else if (chord4 === "Ddim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Ddim} alt="Ddim" /></StyleRoot>
    } else if (chord4 === "Edim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Edim} alt="Edim" /></StyleRoot>
    } else if (chord4 === "F#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Fsharpdim} alt="F#dim" /></StyleRoot>
    } else if (chord4 === "G#dim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpdim} alt="G#dim" /></StyleRoot>
    } else if (chord4 === "G#m") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gsharpmi} alt="G#mi" /></StyleRoot>
    } else if (chord4 === "Gdim") {
        return <StyleRoot> <img style={styles.zoomIn} className="chordChart" src={Gdim} alt="Gdim" /></StyleRoot>
    } else {
        return <div className="emptyCard"></div>
    }
}

export default { Chord1Displayer, Chord2Displayer, Chord3Displayer, Chord4Displayer }