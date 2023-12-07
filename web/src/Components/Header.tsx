import { Search } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSongById, useSongs } from '../hooks/Songs';
import { SearchSongDialog } from './SearchSongDialog';
import { useState } from 'react';
import { useIsMobile } from '../hooks/Mobile';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

export const Header = () => {
    const navigate = useNavigate()
    const { data, loading } = useSongs()
    const [openSearch, setOpenSearch] = useState(false)
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const { data: song } = useSongById(id ?? '')
    const isMobile = useIsMobile()

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Stack direction='row' alignItems='center'>
                    <Stack direction='row' gap='.5rem' alignItems='end'>
                        <Typography variant='h6' style={{ cursor: 'pointer' }} onClick={() => navigate('/')} >Your Chords</Typography>
                        <Typography variant='body2'>v {process.env.REACT_APP_VERSION}</Typography>
                    </Stack>
                </Stack>
                {(id && song && !isMobile) &&
                    <Stack direction='row' gap='.5rem' alignItems='center'>
                        <Typography variant='h6'>{song.name}</Typography>
                        {song.capo && <Typography variant='subtitle2'>({song.capo})</Typography>}
                    </Stack>
                }
                {(!loading && data) &&
                    <Stack direction='row' gap='.5rem'>
                        <IconButton onClick={() => setOpenSearch(true)}><Search /></IconButton>
                    </Stack>
                }
            </StyledToolbar>
            <SearchSongDialog open={openSearch} onClose={() => setOpenSearch(false)} songs={data} />
        </AppBar>
    )
}