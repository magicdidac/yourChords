import { Stack, Typography } from "@mui/material"
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

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'calc(80vw - 1rem) 20vw', maxHeight: 'calc(100vh - 4rem)', marginLeft: '1rem', overflow: 'hidden' }}>
      {(loading || !data) ?
        <CenterLoading label="Loading song..." />
        :
        <div>
          <SongBar width="75vw" marginTop="0" song={data} textSize={textSize} onChangeTextSize={onChangeTextSize} onChangeView={onChangeView} />
          <div style={{ marginTop: '2rem', overflowX: 'hidden' }}>
            <div>
              <Stack direction='row' gap='.5rem' alignItems='start'>
                <Typography variant="h5">{data.name}</Typography>
                <div style={{ fontSize: '10px' }}>({data.artists.join(', ')})</div>
              </Stack>
              {data.capo && <div style={{ fontSize: '10px' }}>Traste: {data.capo}</div>}
            </div>
            <div style={{ maxHeight: 'calc(100vh - 9rem)', overflowY: 'auto' }}>
              <pre style={{ fontSize: textSize + 'px', marginBottom: '1rem' }}>{(chordsView) ? data.html : data.lyrics}</pre>
            </div>
          </div>
        </div>
      }
      <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 4rem)', marginLeft: '1rem' }}>
        <SongList />
      </div>
    </div>
  )
}