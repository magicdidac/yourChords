import { Dialog, DialogContent, List, Stack, TextField } from "@mui/material"
import { Song } from "../interfaces"
import { useState } from "react"
import { SongItem } from "./SongItem"
import { formatString } from "../utils"

interface ISearchSongDialogProps {
  open: boolean
  onClose: () => void
  songs: Song[]
}

export const SearchSongDialog = (props: ISearchSongDialogProps) => {
  const { songs, open, onClose } = props
  const [searchWords, setSearchWords] = useState('')

  const handleClose = () => {
    onClose()
    setSearchWords('')
  }

  const getFilteredSongs = (): Song[] => {

    if (searchWords === '') return songs

    const lowerCase = formatString(searchWords)
    let filteredList: Song[] = []

    filteredList = songs.filter((song) => (
      formatString(song.name).includes(lowerCase) ||
      formatString(song.lyrics).includes(lowerCase) ||
      !!song.artists.find((artist) => formatString(artist).includes(lowerCase))
    ))

    return filteredList
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableRestoreFocus
      fullWidth
    >
      <DialogContent style={{ overflow: 'hidden' }}>
        <Stack direction='column' gap='1rem'>
          <TextField
            autoFocus
            fullWidth
            value={searchWords}
            onChange={(event) => setSearchWords(event.target.value)}
            label='Buscar canción'
          />
          <List style={{ overflowY: 'auto', height: '400px', maxHeight: '400px' }}>
            {getFilteredSongs().map((song, index) => (
              <SongItem key={index} song={song} onClose={handleClose} />
            ))}
          </List>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}