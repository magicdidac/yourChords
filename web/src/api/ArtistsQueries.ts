import { gql } from '@apollo/client'

export const GET_ARTISTS = gql`
query {
  artists {
    name
  }
}
`

export const ADD_ARTIST = gql`
mutation($artist: String!) {
  addArtist(artist: $artist) {
    name
  }
}
`