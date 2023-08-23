import { MyRoutes } from "./routes"
import { Header } from "./Components/Header"

export const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '2rem 0' }}>
        <MyRoutes />
      </div>
    </>
  )
}