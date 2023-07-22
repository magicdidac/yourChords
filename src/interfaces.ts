export interface Song {
    id: string
    name: string
    artists: string[]
    thumbnail: string
    audio: string
    lyrics: string
    html: string
    chords: string[]
    capo?: number
}

export interface Chord {
    name: string,
    frets: number[]
    barre?: number
}