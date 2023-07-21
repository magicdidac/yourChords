import { Song } from "../interfaces";
import { ElPatioDeGodella } from "./ElPatioDeGodella";
import { LaNinaYElHachis } from "./LaNinaYElHachis";

const AllSongs: Song[] = [
    ElPatioDeGodella,
    LaNinaYElHachis
]

export const AllSongsList: Song[] = AllSongs.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})