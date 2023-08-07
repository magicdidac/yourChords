import { callDB } from "./database"
import { Artist, Song } from "./interfaces"
import { parseSongs } from "./utils"

// Queries
export const songs = async (): Promise<Song[]> => {
    const allSongs = await callDB(`
        SELECT s.*, a.name AS artist
        FROM Songs AS s
        INNER JOIN Performs AS p
            ON p.song = s.id
        INNER JOIN Artists AS a
            ON p.artist = a.name
        ORDER BY s.name ASC;
    `)

    return parseSongs(allSongs)
}

export const songById = async (songId: string): Promise<Song> => {
    const response = await callDB(`
        SELECT s.*, a.name AS artist
        FROM Songs AS s
        INNER JOIN Performs AS p
            ON p.song = s.id
        INNER JOIN Artists AS a
            ON p.artist = a.name
        WHERE s.id = "${songId}";
    `)

    return parseSongs(response)[0]
}

export const addSong = async (name: string, videoId: string, html: string, artist: string[], capo?: number): Promise<Song> => {
    const songId = name.toLowerCase().split(' ').join('')
    await callDB(`
        INSERT INTO Songs (id, name, videoId, html, capo)
        VALUES ("${songId}", "${name}", "${videoId}", "${html}", ${capo ?? 'NULL'});
    `)

    const allArtistsSQL = artist.map(a => `("${songId}", "${a}")`).join(',')
    await callDB(`
        INSERT INTO Performs (song, artist)
        VALUES ${allArtistsSQL};
    `)

    return await songById(songId)
}

export const editSong = async (songId: string, videoId: string, html: string, artist: string[], capo?: number): Promise<Song> => {
    await callDB(`
        UPDATE Songs
        SET videoId="${videoId}", html="${html}", capo=${capo ?? 'NULL'}
        WHERE id = "${songId}";
    `)

    await callDB(`
        DELETE FROM Performs WHERE song = "${songId}"
    `)
    const allArtistsSQL = artist.map(a => `("${songId}", "${a}")`).join(',')
    await callDB(`
        INSERT INTO Performs (song, artist)
        VALUES ${allArtistsSQL};
    `)

    return await songById(songId)
}

// Artists
export const artists = async (): Promise<Artist[]> => {
    const response = await callDB(`
        SELECT name
        FROM Artists
        ORDER BY name ASC;
    `)

    return response
}

export const addArtist = async (artist: string): Promise<Artist> => {
    await callDB(`
        INSERT INTO Artists (name)
        VALUES ("${artist}")
    `)

    return { name: artist }
}