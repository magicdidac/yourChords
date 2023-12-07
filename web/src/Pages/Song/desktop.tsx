import { Fab, IconButton, Stack } from "@mui/material"
import { SongList } from "../SongList/SongList"
import { SongBar } from "./SongBar"
import { useSongById } from "../../hooks/Songs"
import { CenterLoading } from "../../Components/CenterLoading"
import { useState } from "react"
import { Add, Close } from "@mui/icons-material"

interface ISongDesktopProps {
  id: string | undefined
  textSize: number
  chordsView: boolean
  onChangeTextSize: (value: number) => void
  onChangeView: (value: boolean) => void
}

export const SongDesktop = ({ id, textSize, chordsView, onChangeTextSize, onChangeView }: ISongDesktopProps) => {
  const { data, loading } = useSongById(id ?? '')
  const [lyricsCount, setLyricsCount] = useState(1)

  const getLyrics = () => {
    if (!data) return

    const components = []

    for (let i = 0; i < lyricsCount; i++) {
      components.push(
        <div key={i} style={{ maxHeight: 'calc(100vh - 7rem)', overflowY: 'auto', paddingRight: '2rem' }}>
          <pre style={{ fontSize: textSize + 'px', marginBottom: '1rem' }}>{(chordsView) ? data.html : data.lyrics}</pre>
        </div>
      )
    }

    return components
  }


  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'calc(80vw - 1rem) 20vw', maxHeight: 'calc(100vh - 4rem)', marginLeft: '1rem', overflow: 'hidden' }}>
      {(loading || !data) ?
        <CenterLoading label="Loading song..." />
        :
        <div>
          <SongBar width="75vw" marginTop="0" song={data} textSize={textSize} onChangeTextSize={onChangeTextSize} onChangeView={onChangeView} />
          <div style={{ marginTop: '3rem', overflowX: 'hidden' }}>
            <Stack direction='row' justifyContent='space-between'>
              {getLyrics()}
              {lyricsCount === 1 && <IconButton size='large' onClick={() => setLyricsCount(2)}><Add /></IconButton>}
            </Stack>
          </div>
          {lyricsCount === 2 && <div style={{ position: 'absolute', bottom: '2rem', right: '22vw' }}>
            <Fab onClick={() => setLyricsCount(1)}>
              <Close />
            </Fab>
          </div>
          }
        </div>
      }
      <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 4rem)', marginLeft: '1rem' }}>
        <SongList />
      </div>
    </div>
  )
}