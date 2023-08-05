import { useMutation, useQuery } from '@apollo/client'
import { ADD_SONG, GET_SONGS, GET_SONG_BY_ID } from '../api/SongsQueries'
import { Song } from '../interfaces'

export const useSongs = () => {
    const { data, error, loading } = useQuery(GET_SONGS)

    return {
        data: (data && data.songs) ? data.songs as Song[] : [],
        error,
        loading
    }
}

export const useSongById = (songId: string) => {
    const { data, error, loading } = useQuery(GET_SONG_BY_ID, { variables: { songId } })

    return {
        data: (data && data.songById) ? data.songById as Song : null,
        error,
        loading
    }
}

export const useAddSong = () => {
    const [addSong] = useMutation(ADD_SONG)

    const add = async (name: string, videoId: string, html: string, artists: string[], capo?: number) => {
        await addSong({ variables: { name, videoId, html, artists, capo } })
    }

    return {
        add
    }
}