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

const Chord1Displayer = ({chord1}) => {
    if (chord1 === "CMaj," || chord1 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord1 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord1 === "DMaj," || chord1 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord1 === "DbMaj," || chord1 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord1 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord1 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord1 === "EMaj," || chord1 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord1 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord1 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord1 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord1 === "FMaj," || chord1 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord1 === "F#," || chord1 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord1 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord1 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord1 === "G," || chord1 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord1 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord1 === "AbMaj," || chord1 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord1 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord1 === "AMaj," || chord1 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord1 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord1 === "BbMaj," || chord1 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord1 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord1 === "B," || chord1 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord1 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord2Displayer = ({chord2}) => {
    if (chord2 === "CMaj," || chord2 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord2 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord2 === "DMaj," || chord2 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord2 === "DbMaj," || chord2 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord2 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord2 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord2 === "EMaj," || chord2 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord2 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord2 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord2 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord2 === "FMaj," || chord2 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord2 === "F#," || chord2 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord2 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord2 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord2 === "G," || chord2 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord2 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord2 === "AbMaj," || chord2 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord2 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord2 === "AMaj," || chord2 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord2 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord2 === "BbMaj," || chord2 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord2 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord2 === "B," || chord2 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord2 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord3Displayer = ({chord3}) => {
    if (chord3 === "CMaj," || chord3 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord3 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord3 === "DMaj," || chord3 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord3 === "DbMaj," || chord3 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord3 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord3 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord3 === "EMaj," || chord3 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord3 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord3 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord3 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord3 === "FMaj," || chord3 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord3 === "F#," || chord3 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord3 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord3 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord3 === "G," || chord3 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord3 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord3 === "AbMaj," || chord3 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord3 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord3 === "AMaj," || chord3 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord3 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord3 === "BbMaj," || chord3 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord3 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord3 === "B," || chord3 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord3 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord4Displayer = ({chord4}) => {
    if (chord4 === "CMaj," || chord4 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (chord4 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (chord4 === "DMaj," || chord4 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (chord4 === "DbMaj," || chord4 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (chord4 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (chord4 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (chord4 === "EMaj," || chord4 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (chord4 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (chord4 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (chord4 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (chord4 === "FMaj," || chord4 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (chord4 === "F#," || chord4 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (chord4 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (chord4 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (chord4 === "G," || chord4 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (chord4 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (chord4 === "AbMaj," || chord4 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (chord4 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (chord4 === "AMaj," || chord4 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (chord4 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (chord4 === "BbMaj," || chord4 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (chord4 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (chord4 === "B," || chord4 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (chord4 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

export default  {Chord1Displayer, Chord2Displayer, Chord3Displayer, Chord4Displayer}