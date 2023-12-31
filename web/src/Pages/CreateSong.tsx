import { useState } from "react"
import { useAddSong } from "../hooks/Songs"
import { SongForm } from "../Components/SongForm"

export const CreateSong = () => {
  const [name, setName] = useState('')
  const [videoId, setVideoId] = useState('')
  const [html, setHtml] = useState('')
  const [capo, setCapo] = useState('0')
  const [artists, setArtists] = useState<string[]>([])

  const addSong = useAddSong()

  const handleAddSong = async () => {
    try {
      let realCapo: number | undefined = undefined

      if (capo !== '' && capo !== '0' && parseInt(capo) > 0)
        realCapo = parseInt(capo)

      await addSong.add(name, videoId, html, artists, realCapo)
      clearAll()
    } catch (e) {
      console.error(e)
    }
  }

  const clearAll = () => {
    setName('')
    setVideoId('')
    setCapo('0')
    setArtists([])
    setHtml('')
  }

  return (
    <SongForm
      title="Crear Canción"
      buttonLabel="Crear Canción"
      onSuccess={handleAddSong}

      name={name}
      onChangeName={(value: string) => setName(value)}
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