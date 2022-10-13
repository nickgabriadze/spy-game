import Card from "./assets/components/card"
import GamePart from "./assets/components/gamePart"
import { useAppSelector } from "./assets/hooks"

function App() {
  const Game = useAppSelector(state => state.gameReducer.gameStarted);

  return (
    <>
      {Game ? <GamePart /> : <Card />}
    </>
  )
}

export default App
