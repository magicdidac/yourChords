import { Container, Stack, Typography } from "@mui/material"
import { SongBar } from "./SongBar"
import { CenterLoading } from "../../Components/CenterLoading"
import { useSongById } from "../../hooks/Songs"

interface ISongMobileProps {
  id: string | undefined
  textSize: number
  chordsView: boolean
  onChangeTextSize: (value: number) => void
  onChangeView: (value: boolean) => void
}

export const SongMobile = ({ id, textSize, chordsView, onChangeTextSize, onChangeView }: ISongMobileProps) => {
  const { data, loading } = useSongById(id ?? '')

  if (loading || !data) return <CenterLoading label="Loading song..." />

  return (
    <>
      <SongBar song={data} width="100vw" textSize={textSize} onChangeTextSize={onChangeTextSize} onChangeView={onChangeView} />
      <Container style={{ marginTop: '4rem', marginBottom: '2rem', overflowX: 'hidden' }}>
        <Stack direction='row' gap='.5rem' alignItems='start'>
          <Typography variant="h5">{data.name}</Typography>
          <div style={{ fontSize: '10px' }}>({data.artists.join(', ')})</div>
        </Stack>
        {data.capo && <div style={{ fontSize: '10px' }}>Traste: {data.capo}</div>}
        <pre style={{ fontSize: textSize + 'px' }}>{(chordsView) ? data.html : data.lyrics}</pre>
      </Container>
    </>
  )
}