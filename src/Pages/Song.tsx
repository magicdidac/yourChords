import { useParams } from "react-router-dom"
import { AllSongsList } from "../Chords"
import { AppBar, CircularProgress, Container, Slider, Stack, Switch, Typography } from "@mui/material"
import { useState } from "react"
import { formatNumber } from "../utils"

export const SongPage = () => {
    const { id } = useParams()
    const song = AllSongsList.find((s) => s.id === id)
    const [chordsView, setChordsView] = useState(true)
    const [textSize, setTextSize] = useState(11)

    const handleChangeView = (_: React.ChangeEvent<HTMLElement>, checked: boolean) => {
        setChordsView(checked)
    }

    const handleChangeTextSize = (_: Event, value: number | number[]) => {
        setTextSize(value as number)
    }

    if (!song) {
        return <CircularProgress />
    }

    return (
        <>
            <AppBar position='fixed' style={{ padding: '3.5rem 1rem 0rem', zIndex: '1', background: 'white' }} elevation={0}>
                <Stack direction='row' justifyContent='space-between'>
                    <Stack direction='row' gap='1rem' width='15rem' alignItems='center'>
                        <Typography variant="body2">{formatNumber(textSize) + 'px'}</Typography>
                        <Slider size="small" value={textSize} onChange={handleChangeTextSize} min={8} max={15} step={1} marks />
                    </Stack>
                    <Stack direction='row' alignItems='center' justifyContent='end'>
                        <Typography>L</Typography>
                        <Switch size="small" defaultChecked onChange={handleChangeView} />
                        <Typography>A</Typography>
                    </Stack>
                </Stack>
            </AppBar>
            <Container style={{ marginTop: '7rem', overflowX: 'hidden' }}>
                <Stack direction='row' gap='.5rem' alignItems='end'>
                    <Typography variant="h5">{song.name}</Typography>
                    <Typography variant='body1'>({song.artists})</Typography>
                </Stack>
                <pre style={{ fontSize: textSize + 'px' }}>{(chordsView) ? song.html : song.lyrics}</pre>
            </Container>
        </>
    )
}