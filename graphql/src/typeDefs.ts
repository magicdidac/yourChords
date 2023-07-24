import { gql } from "apollo-server-lambda";


export const typeDefs = gql`
    type Query {
        songs: [Songs]
    }

    type Song {
        id: String!,
        name: String!,
        artists: [String]!,
        thumbnail: String!,
        audio: String!,
        lyrics: String!,
        html: String!,
        chords: [String]!,
        capo: number
    }
`