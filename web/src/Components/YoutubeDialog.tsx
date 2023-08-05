import { Close } from "@mui/icons-material"
import { Dialog, DialogContent, IconButton, Stack } from "@mui/material"
import ReactPlayer from "react-player"

interface IYoutubeDialogProps {
    videoId: string
    open: boolean
    onClose: () => void
}

export const YoutubeDialog = (props: IYoutubeDialogProps) => {
    const { videoId, open, onClose } = props

    return (
        <Dialog open={open} onClose={onClose}>
            <Stack alignItems='end' marginRight='.5rem' marginTop='.5rem'>
                <IconButton onClick={onClose} size="small"><Close /></IconButton>
            </Stack>
            <DialogContent>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} width='100%' height='75%' playing={true} />
            </DialogContent>
        </Dialog>
    )
}