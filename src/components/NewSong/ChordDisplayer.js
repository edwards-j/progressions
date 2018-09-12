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

const Chord1Displayer = ({yourChords}) => {
    if (yourChords.chord1 === "CMaj," || yourChords.chord1 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord1 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord1 === "DMaj," || yourChords.chord1 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord1 === "DbMaj," || yourChords.chord1 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (yourChords.chord1 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord1 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord1 === "EMaj," || yourChords.chord1 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord1 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord1 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord1 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord1 === "FMaj," || yourChords.chord1 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord1 === "F#," || yourChords.chord1 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (yourChords.chord1 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (yourChords.chord1 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord1 === "G," || yourChords.chord1 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord1 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord1 === "AbMaj," || yourChords.chord1 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (yourChords.chord1 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (yourChords.chord1 === "AMaj," || yourChords.chord1 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord1 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord1 === "BbMaj," || yourChords.chord1 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (yourChords.chord1 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (yourChords.chord1 === "B," || yourChords.chord1 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord1 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord2Displayer = ({yourChords}) => {
    if (yourChords.chord1 === "CMaj," || yourChords.chord1 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord2 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord2 === "DMaj," || yourChords.chord2 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord2 === "DbMaj," || yourChords.chord2 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (yourChords.chord2 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord2 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord2 === "EMaj," || yourChords.chord2 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord2 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord2 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord2 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord2 === "FMaj," || yourChords.chord2 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord2 === "F#," || yourChords.chord2 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (yourChords.chord2 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (yourChords.chord2 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord2 === "G," || yourChords.chord2 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord2 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord2 === "AbMaj," || yourChords.chord2 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (yourChords.chord2 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (yourChords.chord2 === "AMaj," || yourChords.chord2 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord2 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord2 === "BbMaj," || yourChords.chord2 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (yourChords.chord2 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (yourChords.chord2 === "B," || yourChords.chord2 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord2 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord3Displayer = ({yourChords}) => {
    if (yourChords.chord3 === "CMaj," || yourChords.chord3 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord3 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord3 === "DMaj," || yourChords.chord3 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord3 === "DbMaj," || yourChords.chord3 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (yourChords.chord3 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord3 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord3 === "EMaj," || yourChords.chord3 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord3 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord3 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord3 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord3 === "FMaj," || yourChords.chord3 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord3 === "F#," || yourChords.chord3 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (yourChords.chord3 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (yourChords.chord3 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord3 === "G," || yourChords.chord3 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord3 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord3 === "AbMaj," || yourChords.chord3 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (yourChords.chord3 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (yourChords.chord3 === "AMaj," || yourChords.chord3 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord3 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord3 === "BbMaj," || yourChords.chord3 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (yourChords.chord3 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (yourChords.chord3 === "B," || yourChords.chord3 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord3 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

const Chord4Displayer = ({yourChords}) => {
    if (yourChords.chord4 === "CMaj," || yourChords.chord4 === "C,") {
        return <img className="chordChart" src={C} alt="C" />
    } else if (yourChords.chord4 === "Cm,") {
        return <img className="chordChart" src={Cmi} alt="Cmi" />
    } else if (yourChords.chord4 === "DMaj," || yourChords.chord4 === "D,") {
        return <img className="chordChart" src={D} alt="D" />
    } else if (yourChords.chord4 === "DbMaj," || yourChords.chord4 === "Db,") {
        return <img className="chordChart" src={Dflat} alt="D♭" />
    } else if (yourChords.chord4 === "Dbm,") {
        return <img className="chordChart" src={Dflatmi} alt="D" />
    } else if (yourChords.chord4 === "Dm,") {
        return <img className="chordChart" src={Dmi} alt="Dmi" />
    } else if (yourChords.chord4 === "EMaj," || yourChords.chord4 === "E,") {
        return <img className="chordChart" src={E} alt="E" />
    } else if (yourChords.chord4 === "EbMaj,") {
        return <img className="chordChart" src={Eflat} alt="E♭" />
    } else if (yourChords.chord4 === "Ebm,") {
        return <img className="chordChart" src={Eflatmi} alt="E♭mi" />
    } else if (yourChords.chord4 === "Em,") {
        return <img className="chordChart" src={Emi} alt="Emi" />
    } else if (yourChords.chord4 === "FMaj," || yourChords.chord4 === "F,") {
        return <img className="chordChart" src={F} alt="F" />
    } else if (yourChords.chord4 === "F#," || yourChords.chord4 === "F#Maj,") {
        return <img className="chordChart" src={Fsharp} alt="F#" />
    } else if (yourChords.chord4 === "F#m,") {
        return <img className="chordChart" src={Fsharpmi} alt="F#mi" />
    } else if (yourChords.chord4 === "Fm,") {
        return <img className="chordChart" src={Fmi} alt="Fmi" />
    } else if (yourChords.chord4 === "G," || yourChords.chord4 === "GMaj,") {
        return <img className="chordChart" src={G} alt="G" />
    } else if (yourChords.chord4 === "Gm,") {
        return <img className="chordChart" src={Gmi} alt="Gmi" />
    } else if (yourChords.chord4 === "AbMaj," || yourChords.chord4 === "Ab,") {
        return <img className="chordChart" src={Aflat} alt="Ab" />
    } else if (yourChords.chord4 === "Abbm,") {
        return <img className="chordChart" src={Aflatmi} alt="Ab" />
    } else if (yourChords.chord4 === "AMaj," || yourChords.chord4 === "A,") {
        return <img className="chordChart" src={A} alt="A" />
    } else if (yourChords.chord4 === "Am,") {
        return <img className="chordChart" src={Ami} alt="Ami" />
    } else if (yourChords.chord4 === "BbMaj," || yourChords.chord4 === "Bb,") {
        return <img className="chordChart" src={Bflat} alt="Bb" />
    } else if (yourChords.chord4 === "Bbm,") {
        return <img className="chordChart" src={Bflatmi} alt="Bb" />
    } else if (yourChords.chord4 === "B," || yourChords.chord4 === "BMaj,") {
        return <img className="chordChart" src={B} alt="B" />
    } else if (yourChords.chord4 === "Bm,") {
        return <img className="chordChart" src={Bmi} alt="Bmi" />
    } else {
        return <div className="emptyCard"></div>
    }
}

export default  {Chord1Displayer, Chord2Displayer, Chord3Displayer, Chord4Displayer}