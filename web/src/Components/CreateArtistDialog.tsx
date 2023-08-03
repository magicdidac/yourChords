import { useState } from "react"
import { useAddArtist } from "../hooks/Artists"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"

interface ICreateArtistDialogProps {
  open: boolean
  onClose: () => void
  onCreate: (name: string) => void
}

export const CreateArtistDialog = (props: ICreateArtistDialogProps) => {
  const { open, onClose, onCreate } = props

  const [artistName, setArtistName] = useState('')
  const [loading, setLoading] = useState(false)
  const { add } = useAddArtist()

  const handleCreateArtist = async () => {
    setLoading(true)
    try {
      await add(artistName)
      onCreate(artistName)
      onClose()
      setArtistName('')
    } catch (e) {
      console.error(e)
    }

    setLoading(false)
  }

  const handleClose = () => {
    if (!loading) {
      onClose()
      setArtistName('')
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableRestoreFocus
    >
      <DialogTitle>Crear Artista</DialogTitle>
      <form onSubmit={(event) => { event.preventDefault(); handleCreateArtist() }}>
        <DialogContent>
          <TextField
            autoFocus
            disabled={loading}
            style={{ marginTop: '1rem' }}
            label='Nombre del artista'
            onChange={(event) => setArtistName(event.target.value)}
            value={artistName}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='secondary'
            disabled={loading}
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            variant='contained'
            disabled={loading}
            type='submit'
          >
            Crear
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}