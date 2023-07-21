import { Routes, Route } from "react-router-dom"
import { SongList } from "./Pages/SongList"

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SongList />} />
        </Routes>
    )
}