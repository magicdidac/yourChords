export interface Song {
    id: string
    name: string
    videoId: string
    artists: string[]
    html: string
    lyrics: string
    chords: string[]
    capo?: number
}

export interface Artist {
    name: string
}

export interface CommonObj {
    [key: string]: Song[]
}