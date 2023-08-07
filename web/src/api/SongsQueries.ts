import { gql } from '@apollo/client'

const AllSongFields = `
        id
        name
        videoId
        artists
        html
        lyrics
        chords
        chordsTab
        capo
`

export const GET_SONGS = gql`
query {
    songs {
        ${AllSongFields}
    }
}
`

export const GET_SONG_BY_ID = gql`
query ($songId: String!){
    songById (songId: $songId) {
        ${AllSongFields}
    }
}
`

export const ADD_SONG = gql`
mutation($name: String!, $videoId: String!, $html: String!, $artists: [String]!, $capo: Int) {
    addSong (name: $name, videoId: $videoId, html: $html, artists: $artists, capo: $capo){
        ${AllSongFields}
    }
}
`

export const EDIT_SONG = gql`
mutation($songId: String!, $videoId: String!, $html: String!, $artists: [String]!, $capo: Int) {
    editSong (songId: $songId, videoId: $videoId, html: $html, artists: $artists, capo: $capo){
        ${AllSongFields}
    }
}
`