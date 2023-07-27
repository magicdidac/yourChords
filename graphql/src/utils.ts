import { Chords } from "react-chord-display"

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

export const getLyrics = (html: string): string => {
  const allLyrics = html
    .split(/\r?\n/)
    .filter(l => !stringIncludesArray(l, Object.keys(Chords)))
  return upperCaseFirstLetter(allLyrics).join('\n')
}

export const getChords = (html: string): string[] => {
  const allChords = html
    .split(/\r?\n/)
    .filter(l => stringIncludesArray(l, Object.keys(Chords)))
    .map((c) => c.replaceAll(' ', '').replaceAll('(p)', ''))
    .join()
    .split(/(?=[A-Z])/)
    .map(c => c.replaceAll(',', ''))

  return removeDuplicates(allChords)
}

export const getHtml = (html: string): string => {
  return upperCaseFirstLetter(html.split(/\r?\n/)).join('\n')
}