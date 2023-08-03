import { Chords } from "react-chord-display"
import { Song } from "./interfaces"

const stringIncludesArray = (value: string, stringArray: string[]): boolean => {
  for (const s of stringArray) {
    if (value.includes(s)) return true
  }
  return false
}

function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)]
}

const upperCaseFirstLetter = (str: string[]): string[] => {
  return str.map(s => s.charAt(0).toUpperCase() + s.slice(1))
}

const getLyrics = (html: string): string => {
  const allLyrics = html
    .split(/\r?\n/)
    .filter(l => !stringIncludesArray(l, Object.keys(Chords)))
  return upperCaseFirstLetter(allLyrics).join('\n')
}

const replaceAll = (stringValue: string, searchValue: string, replaceValue: string): string => {
  return stringValue.split(searchValue).join(replaceValue)
}

const getChords = (html: string): string[] => {
  const allChords = html
    .split(/\r?\n/)
    .filter(l => stringIncludesArray(l, Object.keys(Chords)))
    .map((c) => replaceAll(replaceAll(replaceAll(c, ' ', ''), '(p)', ''), '\t', ''))
    .join()
    .split(/(?=[A-Z])/)
    .map(c => replaceAll(c, ',', ''))

  return removeDuplicates(allChords)
}

const getHtml = (html: string): string => {
  return upperCaseFirstLetter(html.split(/\r?\n/)).join('\n')
}

export const parseSongs = (response: any): Song[] => {
  const data: Song[] = []

  for (const song of response) {
    const dataSong = data.find((d) => d.id === song.id)
    if (!dataSong) {
      data.push({
        id: song.id,
        name: song.name,
        thumbnail: song.thumbnail,
        audio: song.audio,
        artists: [song.artist],
        html: getHtml(song.html),
        lyrics: getLyrics(song.html),
        chords: getChords(song.html),
        capo: song.capo
      })
    } else {
      dataSong.artists.push(song.artist)
    }
  }

  return data
}