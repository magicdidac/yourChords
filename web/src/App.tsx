import { MyRoutes } from "./routes"
import { ApolloClient, ApolloProvider } from "@apollo/client"
import { InMemoryCache } from "@apollo/client/cache"

export const App = () => {
  const client = new ApolloClient({
    uri: 'https://dhbq3l01r8.execute-api.us-east-1.amazonaws.com/prod/',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div style={{ marginTop: '4rem' }}>
        <MyRoutes />
      </div>
    </ApolloProvider>
  )
}