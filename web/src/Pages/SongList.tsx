import { Divider, List, ListItem, Typography } from "@mui/material"
import { SongItem } from "../Components/SongItem"
import { useSongs } from "../hooks/Songs"
import { CenterLoading } from "../Components/CenterLoading"
import { CommonObj } from "../interfaces"
import { useEffect, useState } from "react"

export const SongList = () => {
    const { data, loading } = useSongs()
    const [songs, setSongs] = useState<CommonObj>()


    useEffect(() => {
        if (data) {
            let correctList: CommonObj = {}

            for (const song of data) {
                const firstChar = song.name.charAt(0).toUpperCase()
                correctList[firstChar] = (correctList[firstChar]) ? [...correctList[firstChar], song] : [song]
            }
            setSongs(correctList)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    if (loading || !songs) return <CenterLoading label="Loading Songs..." />

    return (
        <>
            <List>
                {
                    Object.keys(songs).map((letter: string) => {
                        const letterSongs = songs[letter]
                        return (
                            <div key={letter}>
                                <ListItem>
                                    <Typography variant='h6'>{letter}</Typography>
                                </ListItem>
                                <Divider />
                                {letterSongs.map((song) => (
                                    <SongItem key={song.id} song={song} />
                                ))}
                            </div>
                        )
                    })
                }
            </List>
        </>
    )
}