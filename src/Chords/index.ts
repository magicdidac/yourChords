import { Song } from "../interfaces";
import { AyMiDios } from "./AyMiDios";
import { ElPatioDeGodella } from "./ElPatioDeGodella";
import { LaNinaYElHachis } from "./LaNinaYElHachis";

const AllSongs: Song[] = [
    ElPatioDeGodella,
    LaNinaYElHachis,
    AyMiDios
]

export let AllSongsList: Song[]

export const initSongsList = (): Song[] => {
    AllSongsList = AllSongs.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    return AllSongsList
}