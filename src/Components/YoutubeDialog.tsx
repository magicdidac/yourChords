import { Close } from "@mui/icons-material"
import { Dialog, DialogContent, IconButton, Stack } from "@mui/material"
import ReactPlayer from "react-player"

interface IYoutubeDialogProps {
    url: string
    open: boolean
    onClose: () => void
}

export const YoutubeDialog = (props: IYoutubeDialogProps) => {
    const { url, open, onClose } = props

    return (
        <Dialog open={open} onClose={onClose}>
            <Stack alignItems='end' marginRight='1rem'>
                <IconButton onClick={onClose} size="small"><Close /></IconButton>
            </Stack>
            <DialogContent>
                <ReactPlayer url={url} width='100%' height='75%' playing={true} />
            </DialogContent>
        </Dialog>
    )
}