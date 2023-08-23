import { MenuBook, PlayArrow } from "@mui/icons-material";
import { IconButton, Slider, Stack, Switch, Typography } from "@mui/material";
import { formatNumber } from "../../utils";
import { YoutubeDialog } from "../../Components/YoutubeDialog";
import { ChordsDialog } from "../../Components/ChordsDialog";
import { ISong } from "../../interfaces";
import { useState } from "react";

interface ISongBarProps {
  song: ISong
  textSize: number
  onChangeTextSize: (value: number) => void
  onChangeView: (value: boolean) => void

  width?: string
  marginTop?: string
}

export const SongBar = ({ song, textSize, onChangeTextSize, onChangeView, width, marginTop }: ISongBarProps) => {
  const [openPlayer, setOpenPlayer] = useState(false)
  const [openChords, setOpenChords] = useState(false)

  const handleChangeView = (_: React.ChangeEvent<HTMLElement>, checked: boolean) => {
    onChangeView(checked)
  }

  const handleChangeTextSize = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      onChangeTextSize(value)
    }
  }

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      gap='1rem'
      width={width ? `calc(${width} - 2rem)` : 'calc(100% - 2rem)'}
      position='fixed'
      zIndex='1'
      bgcolor='#f5f5f5'
      marginTop={marginTop ? marginTop : '-4rem'}
      paddingX='1rem'
      paddingBottom='.25rem'
    >
      <Stack direction='row' gap='.5rem'>
        <IconButton onClick={() => setOpenPlayer(true)} size="small" style={{ padding: '0' }}><PlayArrow /></IconButton>
        <IconButton onClick={() => setOpenChords(true)} size="small" style={{ padding: '0' }}><MenuBook /></IconButton>
      </Stack>
      <Stack direction='row' gap='1rem' width='15rem' alignItems='center'>
        <Typography variant="body2">{formatNumber(textSize) + 'px'}</Typography>
        <Slider size="small" value={textSize} onChange={handleChangeTextSize} min={8} max={15} step={1} marks />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='end'>
        <Typography>L</Typography>
        <Switch size="small" defaultChecked onChange={handleChangeView} />
        <Typography>A</Typography>
      </Stack>
      <YoutubeDialog videoId={song.videoId} onClose={() => setOpenPlayer(false)} open={openPlayer} />
      <ChordsDialog chords={song.chords} open={openChords} onClose={() => setOpenChords(false)} />
    </Stack>
  )
}