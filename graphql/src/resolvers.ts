import { songs, songById, addSong, artists, addArtist } from "./functions"


export const resolvers = {
    Query: {
        songs: () => { return songs() },
        songById: (_, args) => { return songById(args.songId) },

        artists: () => { return artists() },
    },
    Mutation: {
        addSong: (_, args) => { return addSong(args.name, args.videoId, args.html, args.artists, args.capo) },

        addArtist: (_, args) => { return addArtist(args.artist) },
    }
}