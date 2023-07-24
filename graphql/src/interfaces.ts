export interface Song {
    id: string
    name: string
    artists: string[]
    thumbnail: string
    audio: string
    html: string
    capo?: number
}