import { Routes, Route } from "react-router-dom"
import { SongList } from "./Pages/SongList"
import { SongPage } from "./Pages/Song"
import { CreateSong } from "./Pages/CreateSong"
import { EditSong } from "./Pages/EditSong"

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/song/:id' element={<SongPage />} />
            <Route path='/edit/song/:id' element={<EditSong />} />
            <Route path='/create' element={<CreateSong />} />
            <Route path='/' element={<SongList />} />
        </Routes>
    )
}