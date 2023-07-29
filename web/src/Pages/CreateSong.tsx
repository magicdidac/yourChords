import { Box, Button, Chip, Container, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField, Tooltip, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { useArtists } from "../hooks/Artists"
import { CenterLoading } from "../Components/CenterLoading"
import { Add } from "@mui/icons-material"
import { CreateArtistDialog } from "../Components/CreateArtistDialog"
import { useAddSong } from "../hooks/Songs"


export const CreateSong = () => {
  const [name, setName] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [audio, setAudio] = useState('')
  const [html, setHtml] = useState('')
  const [capo, setCapo] = useState('0')
  const [artists, setArtists] = useState<string[]>([])
  const [openCreateArtist, setOpenCreateArtist] = useState(false)
  const [submiting, setSubmiting] = useState(false)

  const allArtists = useArtists()
  const addSong = useAddSong()
  const theme = useTheme()

  const handleChangeArtist = (event: SelectChangeEvent<typeof artists>) => {
    const {
      target: { value }
    } = event

    setArtists(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  const handleAddSong = async () => {
    setSubmiting(true)
    try {
      let realCapo: number | undefined = undefined

      if (capo !== '' && capo !== '0' && parseInt(capo) > 0)
        realCapo = parseInt(capo)

      await addSong.add(name, thumbnail, audio, html, artists, realCapo)
      clearAll()
    } catch (e) {
      console.error(e)
    }
    setSubmiting(false)
  }

  const clearAll = () => {
    setName('')
    setThumbnail('')
    setAudio('')
    setCapo('0')
    setArtists([])
    setHtml('')
  }

  if (allArtists.loading || !allArtists.data) return <CenterLoading label="Loading Artists..." />

  return (
    <Container style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <Typography variant="h4">Crear Canción</Typography>
      <Stack direction='row' gap='1rem' marginBottom='1rem'>
        <TextField
          disabled={submiting}
          label='Nombre'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          disabled={submiting}
          label='Thumbnail'
          value={thumbnail}
          onChange={(event) => setThumbnail(event.target.value)}
        />
        <TextField
          disabled={submiting}
          label='Audio'
          value={audio}
          onChange={(event) => setAudio(event.target.value)}
        />
        <TextField
          disabled={submiting}
          label='Capo'
          type='number'
          value={capo}
          onChange={(event) => setCapo(event.target.value)}
        />
      </Stack>
      <Stack direction='column' marginBottom='1rem'>
        <Stack direction='row' alignItems='center' gap='.5rem'>
          <Typography variant="body1">Artistas</Typography>
          <Tooltip title='Añadir artista'>
            <IconButton onClick={() => setOpenCreateArtist(true)} disabled={submiting}><Add /></IconButton>
          </Tooltip>
        </Stack>
        <Select
          disabled={submiting}
          multiple
          value={artists}
          onChange={handleChangeArtist}
          fullWidth
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {allArtists.data.map(({ name }) => (
            <MenuItem
              key={name}
              value={name}
              style={{
                fontWeight:
                  artists.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </Stack>
      <TextField
        disabled={submiting}
        label='Html'
        multiline
        fullWidth
        rows={20}
        value={html}
        onChange={(event) => setHtml(event.target.value)}
      />
      <div style={{ border: '1px solid #aaa', borderRadius: '.25rem', margin: '3rem 0', padding: '1rem' }}>
        <Typography variant="h5">Preview</Typography>
        <pre>{html}</pre>
      </div>
      <Stack alignItems='end'>
        <Button variant='contained' disabled={submiting} onClick={handleAddSong}>Crear canción</Button>
      </Stack>
      <CreateArtistDialog open={openCreateArtist} onClose={() => setOpenCreateArtist(false)} />
    </Container>
  )
}