import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Song } from "../interfaces"

interface ISongItemProps {
    song: Song
    onClose?: () => void
}

export const SongItem = (props: ISongItemProps) => {
    const { song, onClose } = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/song/${song.id}`)
        if (onClose) onClose()
    }

    return (
        <div>
            <ListItem>
                <ListItemButton onClick={handleClick}>
                    <ListItemAvatar>
                        <Avatar alt={'thumbnail de ' + song.name} src={song.thumbnail} />
                    </ListItemAvatar>
                    <ListItemText primary={song.name} />
                </ListItemButton>
            </ListItem>
        </div>
    )
}