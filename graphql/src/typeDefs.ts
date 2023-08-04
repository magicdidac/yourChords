import { gql } from "apollo-server-lambda";


export const typeDefs = gql`
    type Query {
        songs: [Song]
        songById(songId: String!): Song

        artists: [Artist]
    }

    type Mutation {
        addSong(
            name: String!,
            videoId: String!,
            html: String!,
            artists: [String]!
            capo: Int
        ): Song

        addArtist(artist: String!): Artist
    }

    type Song {
        id: String!,
        name: String!,
        artists: [String]!,
        videoId: String!,
        html: String!,
        lyrics: String!,
        chords: [String]!
        capo: Int
    }

    type Artist {
        name: String!
    }
`