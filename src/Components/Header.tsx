import { FilterList, Search } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

interface IHeaderProps {
    onFilter?: () => void
}

export const Header = (props: IHeaderProps) => {
    const { onFilter } = props

    return (
        <AppBar position='static'>
            <StyledToolbar>
                <Typography variant='h6' >Your Chords</Typography>
                <Stack direction='row' gap='.5rem'>
                    {onFilter && <IconButton color='info'><FilterList /></IconButton>}
                    <IconButton color='info'><Search /></IconButton>
                </Stack>
            </StyledToolbar>
        </AppBar>
    )
}