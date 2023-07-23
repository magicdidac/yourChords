import { Chord } from "../interfaces"
import { Barre } from "./Barre"
import { Dot } from "./Dot"
import { Neck } from "./Neck"

interface IChordDisplayProps {
    chord: Chord
}

export const offset = -1
export const positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
}
export const getStringPosition = (string: number) =>
    positions.string[string + offset]

export const strokeColor = '#000'

export const ChordDisplay = (props: IChordDisplayProps) => {
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