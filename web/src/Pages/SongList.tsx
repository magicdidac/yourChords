import { List } from "@mui/material"
import { AllSongsList } from "../Chords"
import { SongItem } from "../Components/SongItem"

export const SongList = () => {
    return (
        <>
            <List>
                {
                    AllSongsList.map((song) => (
                        <SongItem key={song.id} song={song} />
                    ))
                }
            </List>
        </>
    )
}