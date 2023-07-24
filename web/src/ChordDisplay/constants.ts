import { Chord } from "../interfaces";

// A
const A: Chord = {
    name: 'A',
    frets: [-1, 0, 2, 2, 2, 0]
}

const Am: Chord = {
    name: 'Am',
    frets: [-1, 0, 2, 2, 1, 0]
}

// G
const G: Chord = {
    name: 'G',
    barre: 3,
    frets: [0, 2, 2, 1, 0, 0]
}

const G7: Chord = {
    name: 'G7',
    frets: [3, 2, 0, 0, 0, 1]
}

const Gm: Chord = {
    name: 'Gm',
    barre: 3,
    frets: [0, 2, 2, 0, 0, 0]
}

// F
const F: Chord = {
    name: 'F',
    barre: 1,
    frets: [0, 2, 2, 1, 0, 0]
}

const Fm: Chord = {
    name: 'Fm',
    barre: 1,
    frets: [0, 2, 2, 0, 0, 0]
}

// E
const E: Chord = {
    name: 'E',
    frets: [0, 2, 2, 1, 0, 0]
}

const Em: Chord = {
    name: 'Em',
    frets: [0, 2, 2, 0, 0, 0]
}

const E7: Chord = {
    name: 'E7',
    frets: [0, 2, 0, 1, 0, 0]
}

// C
const C: Chord = {
    name: 'C',
    frets: [-1, 3, 2, 0, 1, 0]
}

const Cm: Chord = {
    name: 'Cm',
    barre: 3,
    frets: [0, 0, 2, 2, 1, 0]
}

export const Chords: Record<string, Chord> = {
    A, Am,
    G, Gm, G7,
    F, Fm,
    E, Em, E7,
    C, Cm,
}