import { Search } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSongs } from '../hooks/Songs';
import { SearchSongDialog } from './SearchSongDialog';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

export const Header = () => {
    const navigate = useNavigate()
    const { data, loading } = useSongs()
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <AppBar position='fixed'>
            <StyledToolbar>
                <Stack direction='row' gap='.5rem' alignItems='end'>
                    <Typography variant='h6' style={{ cursor: 'pointer' }} onClick={() => navigate('/')} >Your Chords</Typography>
                    <Typography variant='body2'>v {process.env.REACT_APP_VERSION}</Typography>
                </Stack>
                {(!loading && data) &&
                    <Stack direction='row' gap='.5rem'>
                        <IconButton onClick={() => setOpenSearch(true)}><Search /></IconButton>
                    </Stack>
                }
            </StyledToolbar>
            <SearchSongDialog open={openSearch} onClose={() => setOpenSearch(false)} songs={data} />
        </AppBar >
    )
}