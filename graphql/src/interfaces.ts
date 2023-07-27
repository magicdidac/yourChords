export interface Song {
    id: string
    name: string
    artists: string[]
    thumbnail: string
    audio: string
    html: string
    lyrics: string
    chords: string[]
    capo?: number
}