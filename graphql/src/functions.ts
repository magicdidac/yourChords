import { callDB } from "./database"
import { Song } from "./interfaces"

// Queries
export const songs = async () => {
    const allSongs = await callDB(`
        SELECT s.*, a.name AS artist
        FROM Songs AS s
        INNER JOIN Performs AS p
            ON p.song = s.id
        INNER JOIN Artist AS a
            ON p.artist = a.name
        ORDER BY s.name ASC;
    `)

    const data: Song[] = []

    for (const song of allSongs) {
        const dataSong = data.find((d) => d.id === song.id)
        if (!dataSong) {
            data.push({
                id: song.id,
                name: song.name,
                thumbnail: song.thumbnail,
                audio: song.audio,
                artists: [song.artist],
                html: song.html,
                capo: song.capo
            })
        } else {
            dataSong.artists.push(song.artist)
        }
    }

    return data
}