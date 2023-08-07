import { songs, songById, addSong, editSong, artists, addArtist } from "./functions"


export const resolvers = {
    Query: {
        songs: () => { return songs() },
        songById: (_, args) => { return songById(args.songId) },

        artists: () => { return artists() },
    },
    Mutation: {
        addSong: (_, args) => { return addSong(args.name, args.videoId, args.html, args.artists, args.capo) },
        editSong: (_, args) => { return editSong(args.songId, args.videoId, args.html, args.artists, args.capo) },

        addArtist: (_, args) => { return addArtist(args.artist) },
    }
}