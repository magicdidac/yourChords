import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../api/SongsQueries'

export const useSongs = () => {
    const { data, error, loading } = useQuery(GET_SONGS)

    return {
        data: (data && data.songs) ? data.songs : [],
        error,
        loading
    }
}