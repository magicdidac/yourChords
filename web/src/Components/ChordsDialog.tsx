import { Dialog, DialogContent, Grid, IconButton, Stack } from "@mui/material"
import { ChordDisplay } from "../ChordDisplay"
import { Chords } from "../ChordDisplay/constants"
import { Close } from "@mui/icons-material"

interface IChordsDialogProps {
    chords: string[]
    open: boolean
    onClose: () => void

}

export const ChordsDialog = (props: IChordsDialogProps) => {
    const { chords, open, onClose } = props

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Stack alignItems='end' marginRight='.5rem' marginTop='.5rem'>
                <IconButton onClick={onClose} size="small"><Close /></IconButton>
            </Stack>
            <DialogContent style={{ maxHeight: '75vh' }}>
                <Grid container spacing={2}>
                    {chords.map(c => (
                        <Grid key={c} item xs={6}>
                            <ChordDisplay chord={Chords[c]} />
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}