import { gql } from '@apollo/client'

export const GET_SONGS = gql`
query {
    songs {
        id
        name
        videoId
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
        videoId
        artists
        html
        lyrics
        chords
        capo
    }
}
`

export const ADD_SONG = gql`
mutation($name: String!, $videoId: String!, $html: String!, $artists: [String]!, $capo: Int) {
    addSong (name: $name, videoId: $videoId, html: $html, artists: $artists, capo: $capo){
        id
        name
        videoId
        artists
        html
        lyrics
        chords
        capo
    }
}
`