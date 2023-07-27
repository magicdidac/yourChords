import { CircularProgress, Stack } from "@mui/material"
import { initSongsList } from "./Chords"
import { MyRoutes } from "./routes"
import { useEffect, useState } from "react"
import { Song } from "./interfaces"
import { ApolloClient, ApolloProvider } from "@apollo/client"
import { InMemoryCache } from "@apollo/client/cache"

export const App = () => {
  const [list, setList] = useState<Song[]>()

  const client = new ApolloClient({
    uri: 'https://dhbq3l01r8.execute-api.us-east-1.amazonaws.com/prod/',
    cache: new InMemoryCache()
  })

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
    <ApolloProvider client={client}>
      <div style={{ marginTop: '3rem' }}>
        <MyRoutes />
      </div>
    </ApolloProvider>
  )
}