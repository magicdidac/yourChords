import { useParams } from "react-router-dom"
import { useState } from "react"
import { useIsMobile } from "../../hooks/Mobile"
import { SongMobile } from "./mobile"
import { SongDesktop } from "./desktop"

export const SongPage = () => {
  const { id } = useParams()
  const isMobile = useIsMobile()
  const [chordsView, setChordsView] = useState(true)
  const [textSize, setTextSize] = useState(11)

  if (isMobile) {
    return <SongMobile id={id} textSize={textSize} chordsView={chordsView} onChangeTextSize={setTextSize} onChangeView={setChordsView} />
  }

  return <SongDesktop id={id} textSize={textSize} chordsView={chordsView} onChangeTextSize={setTextSize} onChangeView={setChordsView} />
}