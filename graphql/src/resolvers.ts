import { songs, songsById } from "./functions"


export const resolvers = {
    Query: {
        songs: () => { return songs() },
        songById: (_, args) => { return songsById(args.songId) }
    }
}