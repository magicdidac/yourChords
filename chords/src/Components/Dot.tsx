import { getStringPosition, positions, strokeColor } from "../utils"

interface IDotProps {
    fret: number,
    string: number,
    barre?: number
}

const radius = {
    open: 2,
    fret: 4
}

export const Dot = (props: IDotProps) => {
    const { fret, string, barre } = props

    if (fret === -1) {
        return (
            <text
                fontSize='0.7rem'
                fill={strokeColor}
                fontFamily='Verdana'
                textAnchor='middle'
                x={getStringPosition(string)}
                y='-2'
            >x</text>
        )
    }

    return (
        <g>
            <circle
                strokeWidth='0.25'
                stroke={strokeColor}
                fill={fret === 0 ? 'transparent' : strokeColor}
                cx={getStringPosition(string)}
                cy={positions.fret[barre ? fret + 1 : fret]}
                r={fret === 0 ? radius.open : radius.fret}
            />
        </g>
    )
}