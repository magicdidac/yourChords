import { Routes, Route } from "react-router-dom"
import { SongList } from "./Pages/SongList"
import { SongPage } from "./Pages/Song"

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SongList />} />
            <Route path='/song/:id' element={<SongPage />} />
        </Routes>
    )
}