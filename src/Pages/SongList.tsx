import { List } from "@mui/material"
import { AllSongsList } from "../Chords"
import { Header } from "../Components/Header"
import { SongItem } from "../Components/SongItem"

export const SongList = () => {
    return (
        <>
            <Header onFilter={() => console.log('TODO change this pls')} />
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