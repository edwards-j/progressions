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



const Chord1Displayer = ({ chord1 }) => {
    if (chord1 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord1 === "Cm") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord1 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord1 === "Db") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord1 === "Dbm") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord1 === "Dm") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord1 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord1 === "Eb") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord1 === "Ebm") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord1 === "Em") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord1 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord1 === "F#") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord1 === "F#m") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord1 === "Fm") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord1 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord1 === "Gm") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord1 === "Ab") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord1 === "Abm") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord1 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord1 === "Am") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord1 === "Bb") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord1 === "Bbm") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord1 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord1 === "Bm") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else if (chord1 === "A#dim") {
        return <img className="chordChart" src={Asharpdim} alt="A#dim" />
    } else if (chord1 === "Adim") {
        return <img className="chordChart" src={Adim} alt="Adim" />
    } else if (chord1 === "Bdim") {
        return <img className="chordChart" src={Bdim} alt="Bdim" />
    } else if (chord1 === "C#dim") {
        return <img className="chordChart" src={Csharpdim} alt="C#dim" />
    } else if (chord1 === "C#m") {
        return <img className="chordChart" src={Csharpmi} alt="C#m" />
    } else if (chord1 === "D#dim") {
        return <img className="chordChart" src={Dsharpdim} alt="D#dim" />
    } else if (chord1 === "D#m") {
        return <img className="chordChart" src={Dsharpmi} alt="D#mi" />
    } else if (chord1 === "Ddim") {
        return <img className="chordChart" src={Ddim} alt="Ddim" />
    } else if (chord1 === "Edim") {
        return <img className="chordChart" src={Edim} alt="Edim" />
    } else if (chord1 === "F#dim") {
        return <img className="chordChart" src={Fsharpdim} alt="F#dim" />
    } else if (chord1 === "G#dim") {
        return <img className="chordChart" src={Gsharpdim} alt="G#dim" />
    } else if (chord1 === "G#m") {
        return <img className="chordChart" src={Gsharpmi} alt="G#mi" />
    } else if (chord1 === "Gdim") {
        return <img className="chordChart" src={Gdim} alt="Gdim" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord2Displayer = ({ chord2 }) => {
    if (chord2 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord2 === "Cm") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord2 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord2 === "Db") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord2 === "Dbm") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord2 === "Dm") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord2 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord2 === "Eb") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord2 === "Ebm") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord2 === "Em") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord2 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord2 === "F#") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord2 === "F#m") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord2 === "Fm") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord2 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord2 === "Gm") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord2 === "Ab") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord2 === "Abm") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord2 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord2 === "Am") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord2 === "Bb") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord2 === "Bbm") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord2 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord2 === "Bm") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else if (chord2 === "A#dim") {
        return <img className="chordChart" src={Asharpdim} alt="A#dim" />
    } else if (chord2 === "Adim") {
        return <img className="chordChart" src={Adim} alt="Adim" />
    } else if (chord2 === "Bdim") {
        return <img className="chordChart" src={Bdim} alt="Bdim" />
    } else if (chord2 === "C#dim") {
        return <img className="chordChart" src={Csharpdim} alt="C#dim" />
    } else if (chord2 === "C#m") {
        return <img className="chordChart" src={Csharpmi} alt="C#m" />
    } else if (chord2 === "D#dim") {
        return <img className="chordChart" src={Dsharpdim} alt="D#dim" />
    } else if (chord2 === "D#m") {
        return <img className="chordChart" src={Dsharpmi} alt="D#mi" />
    } else if (chord2 === "Ddim") {
        return <img className="chordChart" src={Ddim} alt="Ddim" />
    } else if (chord2 === "Edim") {
        return <img className="chordChart" src={Edim} alt="Edim" />
    } else if (chord2 === "F#dim") {
        return <img className="chordChart" src={Fsharpdim} alt="F#dim" />
    } else if (chord2 === "G#dim") {
        return <img className="chordChart" src={Gsharpdim} alt="G#dim" />
    } else if (chord2 === "G#m") {
        return <img className="chordChart" src={Gsharpmi} alt="G#mi" />
    } else if (chord2 === "Gdim") {
        return <img className="chordChart" src={Gdim} alt="Gdim" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord3Displayer = ({ chord3 }) => {
    if (chord3 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord3 === "Cm") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord3 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord3 === "Db") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord3 === "Dbm") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord3 === "Dm") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord3 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord3 === "Eb") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord3 === "Ebm") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord3 === "Em") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord3 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord3 === "F#") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord3 === "F#m") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord3 === "Fm") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord3 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord3 === "Gm") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord3 === "Ab") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord3 === "Abm") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord3 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord3 === "Am") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord3 === "Bb") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord3 === "Bbm") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord3 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord3 === "Bm") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else if (chord3 === "A#dim") {
        return <img className="chordChart" src={Asharpdim} alt="A#dim" />
    } else if (chord3 === "Adim") {
        return <img className="chordChart" src={Adim} alt="Adim" />
    } else if (chord3 === "Bdim") {
        return <img className="chordChart" src={Bdim} alt="Bdim" />
    } else if (chord3 === "C#dim") {
        return <img className="chordChart" src={Csharpdim} alt="C#dim" />
    } else if (chord3 === "C#m") {
        return <img className="chordChart" src={Csharpmi} alt="C#m" />
    } else if (chord3 === "D#dim") {
        return <img className="chordChart" src={Dsharpdim} alt="D#dim" />
    } else if (chord3 === "D#m") {
        return <img className="chordChart" src={Dsharpmi} alt="D#mi" />
    } else if (chord3 === "Ddim") {
        return <img className="chordChart" src={Ddim} alt="Ddim" />
    } else if (chord3 === "Edim") {
        return <img className="chordChart" src={Edim} alt="Edim" />
    } else if (chord3 === "F#dim") {
        return <img className="chordChart" src={Fsharpdim} alt="F#dim" />
    } else if (chord3 === "G#dim") {
        return <img className="chordChart" src={Gsharpdim} alt="G#dim" />
    } else if (chord3 === "G#m") {
        return <img className="chordChart" src={Gsharpmi} alt="G#mi" />
    } else if (chord3 === "Gdim") {
        return <img className="chordChart" src={Gdim} alt="Gdim" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord4Displayer = ({ chord4 }) => {
    if (chord4 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord4 === "Cm") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord4 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord4 === "Db") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord4 === "Dbm") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord4 === "Dm") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord4 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord4 === "Eb") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord4 === "Ebm") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord4 === "Em") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord4 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord4 === "F#") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord4 === "F#m") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord4 === "Fm") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord4 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord4 === "Gm") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord4 === "Ab") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord4 === "Abm") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord4 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord4 === "Am") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord4 === "Bb") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord4 === "Bbm") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord4 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord4 === "Bm") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else if (chord4 === "A#dim") {
        return <img className="chordChart" src={Asharpdim} alt="A#dim" />
    } else if (chord4 === "Adim") {
        return <img className="chordChart" src={Adim} alt="Adim" />
    } else if (chord4 === "Bdim") {
        return <img className="chordChart" src={Bdim} alt="Bdim" />
    } else if (chord4 === "C#dim") {
        return <img className="chordChart" src={Csharpdim} alt="C#dim" />
    } else if (chord4 === "C#m") {
        return <img className="chordChart" src={Csharpmi} alt="C#m" />
    } else if (chord4 === "D#dim") {
        return <img className="chordChart" src={Dsharpdim} alt="D#dim" />
    } else if (chord4 === "D#m") {
        return <img className="chordChart" src={Dsharpmi} alt="D#mi" />
    } else if (chord4 === "Ddim") {
        return <img className="chordChart" src={Ddim} alt="Ddim" />
    } else if (chord4 === "Edim") {
        return <img className="chordChart" src={Edim} alt="Edim" />
    } else if (chord4 === "F#dim") {
        return <img className="chordChart" src={Fsharpdim} alt="F#dim" />
    } else if (chord4 === "G#dim") {
        return <img className="chordChart" src={Gsharpdim} alt="G#dim" />
    } else if (chord4 === "G#m") {
        return <img className="chordChart" src={Gsharpmi} alt="G#mi" />
    } else if (chord4 === "Gdim") {
        return <img className="chordChart" src={Gdim} alt="Gdim" />
    } else {
        return <div className="emptyCard"></div>
    }
}

export default { Chord1Displayer, Chord2Displayer, Chord3Displayer, Chord4Displayer }