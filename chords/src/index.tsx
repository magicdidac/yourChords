import { Chord } from "./types/types"
import { Barre } from "./Components/Barre"
import { Dot } from "./Components/Dot"
import { Neck } from "./Components/Neck"
import { Chords } from "./constants"
import { getStringPosition, strokeColor } from "./utils"

interface IChordDisplayProps {
    chord: Chord
}

const ChordDisplay = (props: IChordDisplayProps) => {
    const { chord } = props

    const onlyDots = chord.frets
        .map((f, index) => ({ position: index, value: f }))
        .filter(f => !chord.barre || f.value !== 0)

    return (
        <svg
            width='100%'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 80 80'>
            <g
                transform='translate(13, 13)'>
                <Neck
                    frets={chord.frets}
                    barre={chord.barre}
                />
                {chord.barre &&
                    <Barre
                        frets={chord.frets}
                    />
                }
                {onlyDots.map(fret => (
                    <Dot
                        key={fret.position}
                        fret={fret.value}
                        string={6 - fret.position}
                        barre={chord.barre}
                    />
                ))}
                <text
                    fontSize='0.7rem'
                    fill={strokeColor}
                    fontFamily='Verdana'
                    textAnchor='middle'
                    x={getStringPosition(3) - 5}
                    y={60}

                >{chord.name}</text>
            </g>
        </svg>
    )
}

export { Chords, ChordDisplay }