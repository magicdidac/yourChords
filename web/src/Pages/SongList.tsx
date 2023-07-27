import { List } from "@mui/material"
import { SongItem } from "../Components/SongItem"
import { useSongs } from "../hooks/Songs"
import { CenterLoading } from "../Components/CenterLoading"

export const SongList = () => {
    const { data, loading } = useSongs()

    if (loading) return <CenterLoading label="Loading Songs..." />

    return (
        <>
            <List>
                {
                    data.map((song) => (
                        <SongItem key={song.id} song={song} />
                    ))
                }
            </List>
        </>
    )
}