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
        capo
    }
}
`