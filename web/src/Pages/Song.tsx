import { useParams } from "react-router-dom"
import { AppBar, Container, IconButton, Slider, Stack, Switch, Typography } from "@mui/material"
import { useState } from "react"
import { formatNumber } from "../utils"
import { MenuBook, PlayArrow } from "@mui/icons-material"
import { YoutubeDialog } from "../Components/YoutubeDialog"
import { ChordsDialog } from "../Components/ChordsDialog"
import { useSongById } from "../hooks/Songs"
import { CenterLoading } from "../Components/CenterLoading"

export const SongPage = () => {
    const { id } = useParams()
    const { data, loading } = useSongById(id ?? '')
    const [chordsView, setChordsView] = useState(true)
    const [textSize, setTextSize] = useState(11)
    const [openPlayer, setOpenPlayer] = useState(false)
    const [openChords, setOpenChords] = useState(false)

    const handleChangeView = (_: React.ChangeEvent<HTMLElement>, checked: boolean) => {
        setChordsView(checked)
    }

    const handleChangeTextSize = (_: Event, value: number | number[]) => {
        setTextSize(value as number)
    }

    if (loading || !data) return <CenterLoading label="Loading song..." />

    return (
        <>
            <AppBar position='fixed' style={{ padding: '3.5rem 1rem 0rem', zIndex: '1', background: 'white' }} elevation={0}>
                <Stack direction='row' justifyContent='space-between' gap='1rem'>
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
                </Stack>
            </AppBar>
            <Container style={{ marginTop: '7rem', marginBottom: '2rem', overflowX: 'hidden' }}>
                <Stack direction='row' gap='.5rem' alignItems='start'>
                    <Typography variant="h5">{data.name}</Typography>
                    <div style={{ fontSize: '10px' }}>({data.artists.join(', ')})</div>
                </Stack>
                {data.capo && <div style={{ fontSize: '10px' }}>Traste: {data.capo}</div>}
                <pre style={{ fontSize: textSize + 'px' }}>{(chordsView) ? data.html : data.lyrics}</pre>
            </Container>
            <YoutubeDialog url={data.audio} onClose={() => setOpenPlayer(false)} open={openPlayer} />
            <ChordsDialog chords={data.chords} open={openChords} onClose={() => setOpenChords(false)} />
        </>
    )
}