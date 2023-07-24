import { strokeColor } from "."

interface INeckProps {
    frets: number[],
    barre?: number
}

export const Neck = (props: INeckProps) => {
    const { frets, barre } = props

    const getNeckHorizontalLine = (pos: number) => `M 0 ${12 * pos} H 50`
    const getNeckVerticalLine = (pos: number) => `M ${pos * 10} 0 V 48`

    const getNeckPath = () =>
        Array.apply(null, Array(5)).map((_, pos) => getNeckHorizontalLine(pos)).join(' ').concat(
            Array.apply(null, Array(6)).map((_, pos) => getNeckVerticalLine(pos)).join(' '))

    return (
        <g>
            <path
                stroke={strokeColor}
                strokeWidth='0.25'
                strokeLinecap="square"
                d={getNeckPath()} />
            {!barre || barre === 1 ?
                <path
                    stroke={strokeColor}
                    strokeWidth='2'
                    strokeLinecap='round'
                    d={`M 0 0 H 50`} />
                : <text
                    fontSize='0.5rem'
                    fill={strokeColor}
                    fontFamily='Verdana'
                    x={frets[0] === 1 ? (barre > 9 ? -12 : -11) : (barre > 9 ? -10 : -7)}
                    y='9'
                >{barre}</text>}
        </g>
    )
}