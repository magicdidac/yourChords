import { strokeColor } from "."

interface IBarreProps {
    frets: number[]
}

const fretXPosition = [0, 10, 20, 30, 40, 50]

export const Barre = (props: IBarreProps) => {
    const { frets } = props

    const onlyBarres = frets.map((f, index) => ({ position: index, value: f }))
        .filter(f => f.value === 0)

    const string1 = onlyBarres[0].position
    const string2 = onlyBarres[onlyBarres.length - 1].position
    const width = (string2 - string1) * 10
    const y = 4

    return (
        <g>
            <rect
                fill={strokeColor}
                x={fretXPosition[string1]}
                y={y}
                width={width}
                height={4}
            />
        </g>
    )
}