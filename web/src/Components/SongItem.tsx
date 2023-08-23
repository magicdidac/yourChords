import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ISong } from "../interfaces"

interface ISongItemProps {
    song: ISong
    onClose?: () => void
}

export const SongItem = ({ song, onClose }: ISongItemProps) => {
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
                        <Avatar alt={'thumbnail de ' + song.name} src={`https://img.youtube.com/vi/${song.videoId}/1.jpg`} />
                    </ListItemAvatar>
                    <ListItemText primary={song.name} />
                </ListItemButton>
            </ListItem>
        </div>
    )
}