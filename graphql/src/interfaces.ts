export interface Song {
    id: string
    name: string
    artists: string[]
    videoId: string
    html: string
    lyrics: string
    chords: string[]
    capo?: number
}

export interface Artist {
    name: string
}