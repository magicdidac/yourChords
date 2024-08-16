import { Stack } from "@mui/material"
import { SongList } from "../SongList/SongList"
import { SongBar } from "./SongBar"
import { useSongById } from "../../hooks/Songs"
import { CenterLoading } from "../../Components/CenterLoading"

interface ISongDesktopProps {
  id: string | undefined
  textSize: number
  chordsView: boolean
  onChangeTextSize: (value: number) => void
  onChangeView: (value: boolean) => void
}

export const SongDesktop = ({ id, textSize, chordsView, onChangeTextSize, onChangeView }: ISongDesktopProps) => {
  const { data, loading } = useSongById(id ?? '')

  const getLyrics = () => {
    if (!data) return

    const chunks = (chordsView) ? data.html.split('\n\n') : data.lyrics.split('\n\n')

    return (
      <div style={{ maxHeight: 'calc(100vh - 7rem)' }}>
        <div style={{ columnCount: '2', columnGap: '2rem', width: '100%', margin: '0 auto' }}>
          {chunks.map((chunk, index) => (
            <pre key={index} style={{ breakInside: 'avoid', marginBottom: '1rem', fontSize: textSize + 'px' }}>{chunk}</pre>
          ))}
        </div>
      </div>
    )
  }


  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'calc(80vw - 1rem) 20vw', maxHeight: 'calc(100vh - 4rem)', marginLeft: '1rem', overflow: 'hidden' }}>
      {(loading || !data) ?
        <CenterLoading label="Loading song..." />
        :
        <div>
          <SongBar width="75vw" marginTop="0" song={data} textSize={textSize} onChangeTextSize={onChangeTextSize} onChangeView={onChangeView} />
          <div style={{ marginTop: '3rem', overflowX: 'hidden' }}>
            <Stack direction='row' justifyContent='space-around'>
              {getLyrics()}
            </Stack>
          </div>
        </div>
      }
      <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 4rem)', marginLeft: '1rem' }}>
        <SongList />
      </div>
    </div>
  )
}