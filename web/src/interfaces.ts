export interface Song {
    id: string
    name: string
    audio: string
    thumbnail: string
    artists: string[]
    html: string
    lyrics: string
    chords: string[]
    capo?: number
}

export interface Artist {
    name: string
}