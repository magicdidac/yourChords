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