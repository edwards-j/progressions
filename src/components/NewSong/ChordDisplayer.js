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
import Fsharp from '../../img/png/F♯.png'
import Fsharpmi from '../../img/png/F♯mi.png'
import Fmi from '../../img/png/Fmi.png'
import G from '../../img/png/G.png'
import Gmi from '../../img/png/Gmi.png'

const Chord1Displayer = ({yourChords, }) => {
    if (yourChords.chord1 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord1 === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord1 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord1 === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord1 === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord1 === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord1 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord1 === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord1 === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord1 === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord1 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord1 === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord1 === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord1 === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord1 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord1 === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord1 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord1 === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord1 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord1 === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord2Displayer = ({yourChords}) => {
    if (yourChords.chord2 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord2 === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord2 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord2 === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord2 === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord2 === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord2 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord2 === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord2 === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord2 === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord2 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord2 === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord2 === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord2 === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord2 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord2 === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord2 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord2 === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord2 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord2 === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord3Displayer = ({yourChords}) => {
    if (yourChords.chord3 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord3 === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord3 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord3 === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord3 === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord3 === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord3 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord3 === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord3 === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord3 === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord3 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord3 === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord3 === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord3 === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord3 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord3 === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord3 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord3 === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord3 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord3 === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord4Displayer = ({yourChords}) => {
    if (yourChords.chord4 === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord4 === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord4 === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord4 === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord4 === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord4 === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord4 === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord4 === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord4 === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord4 === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord4 === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord4 === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord4 === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord4 === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord4 === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord4 === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord4 === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord4 === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord4 === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord4 === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

export default  {Chord1Displayer, Chord2Displayer, Chord3Displayer, Chord4Displayer}