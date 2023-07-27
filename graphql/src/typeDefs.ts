import { gql } from "apollo-server-lambda";


export const typeDefs = gql`
    type Query {
        songs: [Song]
    }

    type Song {
        id: String!,
        name: String!,
        artists: [String]!,
        thumbnail: String!,
        audio: String!,
        html: String!,
        lyrics: String!,
        chords: [String]!
        capo: Int
    }
`