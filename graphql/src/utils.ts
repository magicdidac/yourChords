import { Song } from "./interfaces"

const getAll = (html: string) => {
  const lines = html.trim().split(/\r?\n/)
  const chordsRegex = new RegExp('[A-G](#)?(m)?[1-9]?(\-[a-z])?', 'g')

  const processedChords: string[] = []
  let lyrics = ''
  let chordsTab = ''

  for (const line of lines) {
    if (line.startsWith('#')) {
      chordsTab += line.trim() + '\n'
      continue
    }
    const match = line.match(chordsRegex)
    if (match) {
      const verse = line.replace(chordsRegex, '').trim()
      if (verse.length) {
        lyrics += line.trim() + '\n'
      } else {
        const correctMatch = match.map(m => m.replace(new RegExp('\-[a-z]?', 'g'), ''))
        processedChords.push(...correctMatch)
        chordsTab += match.join(', ') + '\n'
      }
    } else {
      lyrics += line.trim() + '\n'
    }
  }

  return {
    chords: Array.from(new Set(processedChords)),
    lyrics: lyrics.trim(),
    chordsTab: chordsTab.trim()
  }
}

export const parseSongs = (response: any): Song[] => {
  const data: Song[] = []

  for (const song of response) {
    const dataSong = data.find((d) => d.id === song.id)
    if (!dataSong) {
      const { lyrics, chords, chordsTab } = getAll(song.html)
      data.push({
        id: song.id,
        name: song.name,
        videoId: song.videoId,
        artists: [song.artist],
        html: song.html,
        lyrics,
        chords,
        chordsTab,
        capo: song.capo
      })
    } else {
      dataSong.artists.push(song.artist)
    }
  }

  return data
}