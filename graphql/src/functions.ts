import { callDB } from "./database"
import { Song } from "./interfaces"
import { parseSongs } from "./utils"

// Queries
export const songs = async (): Promise<Song[]> => {
    const allSongs = await callDB(`
        SELECT s.*, a.name AS artist
        FROM Songs AS s
        INNER JOIN Performs AS p
            ON p.song = s.id
        INNER JOIN Artist AS a
            ON p.artist = a.name
        ORDER BY s.name ASC;
    `)

    return parseSongs(allSongs)
}

export const songsById = async (songId: string): Promise<Song> => {
    const response = await callDB(`
        SELECT s.*, a.name AS artist
        FROM Songs AS s
        INNER JOIN Performs AS p
            ON p.song = s.id
        INNER JOIN Artist AS a
            ON p.artist = a.name
        WHERE s.id = "${songId}";
    `)

    return parseSongs(response)[0]
}