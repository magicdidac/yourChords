import { songs } from "./functions"


export const resolvers = {
    Query: {
        songs: () => { return songs() }
    }
}