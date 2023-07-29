import { gql } from '@apollo/client'

export const GET_SONGS = gql`
query {
    songs {
        id
        name
        audio
        thumbnail
        artists
        html
        lyrics
        chords
        capo
    }
}
`

export const GET_SONG_BY_ID = gql`
query ($songId: String!){
    songById (songId: $songId) {
        id
        name
        audio
        thumbnail
        artists
        html
        lyrics
        chords
        capo
    }
}
`

export const ADD_SONG = gql`
mutation($name: String!, $thumbnail: String!, $audio: String!, $html: String!, $artists: [String]!, $capo: Int) {
    addSong (name: $name, thumbnail: $thumbnail, audio: $audio, html: $html, artists: $artists, capo: $capo){
        id
        name
        audio
        thumbnail
        artists
        html
        lyrics
        chords
        capo
    }
}
`