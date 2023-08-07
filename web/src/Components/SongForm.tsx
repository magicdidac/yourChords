import { Add } from "@mui/icons-material"
import { Box, Button, Chip, Container, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField, Tooltip, Typography, useTheme } from "@mui/material"
import { CreateArtistDialog } from "./CreateArtistDialog"
import { useState } from "react"
import { useArtists } from "../hooks/Artists"
import { CenterLoading } from "./CenterLoading"

interface ISongFormProps {
  title: string
  buttonLabel: string
  onSuccess: () => Promise<void>

  name: string
  onChangeName?: (newName: string) => void

  videoId: string
  onChangeVideoId: (newVideoId: string) => void

  capo: string
  onChangeCapo: (newCapo: string) => void

  artists: string[]
  onChangeArtists: (newArtists: string[]) => void

  html: string
  onChangeHtml: (newHtml: string) => void
}

export const SongForm = (props: ISongFormProps) => {
  const {
    title,
    buttonLabel,
    onSuccess,
    name, onChangeName,
    videoId, onChangeVideoId,
    capo, onChangeCapo,
    artists, onChangeArtists,
    html, onChangeHtml,
  } = props

  const allArtists = useArtists()
  const theme = useTheme()

  const [submitting, setSubmitting] = useState(false)
  const [openCreateArtist, setOpenCreateArtist] = useState(false)

  const handleCreateArtist = (name: string) => {
    onChangeArtists([...artists, name])
  }

  const handleChangeArtist = (event: SelectChangeEvent<typeof artists>) => {
    const {
      target: { value }
    } = event

    onChangeArtists(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  const handleSuccess = async () => {
    setSubmitting(true)
    await onSuccess()
    setSubmitting(false)
  }

  if (allArtists.loading || !allArtists.data) return <CenterLoading label="Loading Artists..." />
  if (submitting) return <CenterLoading label="Submitting..." />

  return (
    <Container style={{ marginTop: '5rem' }}>
      <Typography variant="h4">{title}</Typography>
      {!onChangeName &&
        <Typography variant="body1">Nombre: {name}</Typography>
      }
      <Stack direction='row' gap='1rem' margin='1rem 0' alignItems='center'>
        {onChangeName &&
          <TextField
            disabled={submitting}
            label='Nombre'
            value={name}
            onChange={(event) => onChangeName(event.target.value)}
          />
        }
        <TextField
          disabled={submitting}
          label='Id del video'
          value={videoId}
          onChange={(event) => onChangeVideoId(event.target.value)}
        />
        <TextField
          disabled={submitting}
          label='Capo'
          type='number'
          value={capo}
          onChange={(event) => onChangeCapo(event.target.value)}
        />
      </Stack>
      <Stack direction='column' marginBottom='1rem'>
        <Stack direction='row' alignItems='center' gap='.5rem'>
          <Typography variant="body1">Artistas</Typography>
          <Tooltip title='Añadir artista'>
            <IconButton onClick={() => setOpenCreateArtist(true)} disabled={submitting}><Add /></IconButton>
          </Tooltip>
        </Stack>
        <Select
          disabled={submitting}
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
        disabled={submitting}
        label='Html'
        multiline
        fullWidth
        rows={20}
        value={html}
        onChange={(event) => onChangeHtml(event.target.value)}
      />
      <Stack alignItems='end' marginTop='1rem'>
        <Button variant='contained' disabled={submitting} onClick={handleSuccess}>{buttonLabel}</Button>
      </Stack>
      <CreateArtistDialog open={openCreateArtist} onClose={() => setOpenCreateArtist(false)} onCreate={handleCreateArtist} />
    </Container>
  )
}