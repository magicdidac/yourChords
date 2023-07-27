import { Chords } from "react-chord-display";
import { Song } from "../interfaces";
import { removeDuplicates, stringIncludesArray, upperCaseFirstLetter } from "../utils";
import { AyMiDios } from "./AyMiDios";
import { ElPatioDeGodella } from "./ElPatioDeGodella";
import { LaNinaYElHachis } from "./LaNinaYElHachis";

const getLyrics = (html: string): string => {
    const allLyrics = html
        .split(/\r?\n/)
        .filter(l => !stringIncludesArray(l, Object.keys(Chords)))
    return upperCaseFirstLetter(allLyrics).join('\n')
}

const getChords = (html: string): string[] => {
    const allChords = html
        .split(/\r?\n/)
        .filter(l => stringIncludesArray(l, Object.keys(Chords)))
        .map((c) => c.replaceAll(' ', '').replaceAll('(p)', ''))
        .join()
        .split(/(?=[A-Z])/)
        .map(c => c.replaceAll(',', ''))

    return removeDuplicates(allChords)
}

const getHtml = (html: string): string => {
    return upperCaseFirstLetter(html.split(/\r?\n/)).join('\n')
}


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
        .map(s => ({ ...s, lyrics: getLyrics(s.html), chords: getChords(s.html), html: getHtml(s.html) }))

    return AllSongsList
}