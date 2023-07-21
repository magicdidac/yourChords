import { CircularProgress, Stack } from "@mui/material"
import { initSongsList } from "./Chords"
import { MyRoutes } from "./routes"
import { useEffect, useState } from "react"
import { Song } from "./interfaces"

export const App = () => {

  const [list, setList] = useState<Song[]>()

  useEffect(() => {
    setList(initSongsList())
  }, [])

  useEffect(() => {
    if (!list) setList(initSongsList())
  }, [list])

  if (!list) {
    return (
      <Stack direction='column' height='100vh' alignItems='center' justifyContent='center' gap='2rem'>
        <CircularProgress size='5rem' />
        Loading Songs...
      </Stack>
    )
  }

  return (
    <div style={{ marginTop: '3rem' }}>
      <MyRoutes />
    </div>
  )
}