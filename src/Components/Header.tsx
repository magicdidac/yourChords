import { Search } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

export const Header = () => {
    const navigate = useNavigate()

    return (
        <AppBar position='fixed'>
            <StyledToolbar>
                <Typography variant='h6' style={{ cursor: 'pointer' }} onClick={() => navigate('/')} >Your Chords</Typography>
                <Stack direction='row' gap='.5rem'>
                    <IconButton><Search /></IconButton>
                </Stack>
            </StyledToolbar>
        </AppBar>
    )
}