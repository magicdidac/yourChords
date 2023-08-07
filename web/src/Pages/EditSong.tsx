import { useEffect, useState } from "react"
import { useSongById } from "../hooks/Songs"
import { SongForm } from "../Components/SongForm"
import { useNavigate, useParams } from "react-router-dom"
import { CenterLoading } from "../Components/CenterLoading"

export const EditSong = () => {
  const { id } = useParams()

  const [videoId, setVideoId] = useState('')
  const [html, setHtml] = useState('')
  const [capo, setCapo] = useState('0')
  const [artists, setArtists] = useState<string[]>([])

  const song = useSongById(id ?? '')
  const navigate = useNavigate()

  useEffect(() => {
    if (!song.data) return

    setVideoId(song.data.videoId)
    setCapo(song.data.capo + '')
    setArtists(song.data.artists)
    setHtml(song.data.html)

  }, [song.data])

  const handleEditSong = async () => {
    try {
      let realCapo: number | undefined = undefined

      if (capo !== '' && capo !== '0' && parseInt(capo) > 0)
        realCapo = parseInt(capo)

      await song.edit(videoId, html, artists, realCapo)
      navigate(`/song/${id}`)
    } catch (e) {
      console.error(e)
    }
  }

  if (song.loading || !song.data) return <CenterLoading label="Loading Song..." />

  return (
    <SongForm
      title="Editar Canción"
      buttonLabel="Editar Canción"
      onSuccess={handleEditSong}

      name={song.data.name}
      videoId={videoId}
      onChangeVideoId={(value: string) => setVideoId(value)}
      capo={capo}
      onChangeCapo={(value: string) => setCapo(value)}
      html={html}
      onChangeHtml={(value: string) => setHtml(value)}
      artists={artists}
      onChangeArtists={(values: string[]) => setArtists(values)}
    />
  )
}