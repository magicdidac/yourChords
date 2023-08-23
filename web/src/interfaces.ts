export interface ISong {
    id: string
    name: string
    videoId: string
    artists: string[]
    html: string
    lyrics: string
    chords: string[]
    capo?: number
}

export interface IArtist {
    name: string
}

export interface ICommonObj {
    [key: string]: ISong[]
}