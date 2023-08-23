import { useMutation, useQuery } from "@apollo/client"
import { ADD_ARTIST, GET_ARTISTS } from "../api/ArtistsQueries"
import { IArtist } from "../interfaces"


export const useArtists = () => {
  const { data, error, loading } = useQuery(GET_ARTISTS)

  return {
    data: (data && data.artists) ? data.artists as IArtist[] : null,
    error,
    loading
  }
}

export const useAddArtist = () => {
  const [addArtist] = useMutation(ADD_ARTIST, {
    refetchQueries: [{ query: GET_ARTISTS }]
  })

  const add = async (name: string) => {
    await addArtist({ variables: { artist: name } })
  }

  return {
    add
  }
}