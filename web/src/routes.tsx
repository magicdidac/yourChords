import { Routes, Route } from "react-router-dom"
import { CreateSong } from "./Pages/CreateSong"
import { EditSong } from "./Pages/EditSong"
import { SongPage } from "./Pages/Song"
import { SongListPage } from "./Pages/SongList"

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/song/:id' element={<SongPage />} />
            <Route path='/edit/song/:id' element={<EditSong />} />
            <Route path='/create' element={<CreateSong />} />
            <Route path='/' element={<SongListPage />} />
        </Routes>
    )
}