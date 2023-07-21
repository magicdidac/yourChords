import { Avatar, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Song } from "../interfaces"

interface ISongItemProps {
    song: Song
}

export const SongItem = (props: ISongItemProps) => {
    const { song } = props
    const navigate = useNavigate()

    return (
        <div>
            <ListItem>
                <ListItemButton onClick={() => navigate(`/song/${song.id}`)}>
                    <ListItemAvatar>
                        <Avatar alt={'thumbnail de ' + song.name} src={song.thumbnail} />
                    </ListItemAvatar>
                    <ListItemText primary={song.name} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </div>
    )
}