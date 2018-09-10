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
    console.log(yourChords)
    if (yourChords.chord1.name === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord1.name === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord1.name === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord1.name === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord1.name === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord1.name === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord1.name === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord1.name === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord1.name === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord1.name === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord1.name === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord1.name === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord1.name === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord1.name === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord1.name === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord1.name === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord1.name === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord1.name === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord1.name === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord1.name === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    }
}

const Chord2Displayer = ({yourChords}) => {
    console.log(yourChords)
    if (yourChords.chord2.name === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord2.name === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord2.name === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord2.name === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord2.name === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord2.name === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord2.name === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord2.name === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord2.name === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord2.name === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord2.name === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord2.name === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord2.name === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord2.name === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord2.name === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord2.name === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord2.name === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord2.name === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord2.name === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord2.name === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    }
}

const Chord3Displayer = ({yourChords}) => {
    console.log(yourChords)
    if (yourChords.chord3.name === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord3.name === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord3.name === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord3.name === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord3.name === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord3.name === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord3.name === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord3.name === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord3.name === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord3.name === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord3.name === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord3.name === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord3.name === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord3.name === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord3.name === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord3.name === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord3.name === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord3.name === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord3.name === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord3.name === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    }
}

const Chord4Displayer = ({yourChords}) => {
    console.log(yourChords)
    if (yourChords.chord4.name === "C") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord4.name === "Cmi") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord4.name === "D") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord4.name === "D♭") {
        return <img className="chordChart" src={Dflat} alt="DD♭" />
    } else if (yourChords.chord4.name === "D♭mi") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord4.name === "Dmi") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord4.name === "E") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord4.name === "E♭") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord4.name === "E♭mi") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord4.name === "Emi") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord4.name === "F") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord4.name === "F♯") {
        return <img className="chordChart" src={Fsharp} alt="F♯" />
    } else if (yourChords.chord4.name === "F♯mi") {
        return <img className="chordChart" src={Fsharpmi} alt="F♯mi" />
    } else if (yourChords.chord4.name === "Fmi") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord4.name === "G") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord4.name === "Gmi") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord4.name === "A") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord4.name === "Ami") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord4.name === "B") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord4.name === "Bmi") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    }
}

export default  {Chord1Displayer, Chord2Displayer, Chord3Displayer, Chord4Displayer}