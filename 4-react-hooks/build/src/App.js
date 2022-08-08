import Context from "./hooks/Context"
import Effect from "./hooks/Effect"
import Reducer from "./hooks/Reducer"
import Ref from "./hooks/Ref"
import State from "./hooks/State"

function App() {
  return (
    <div className="container">
      <State />
      <br />
      <Effect />
      <br />
      <Context />
      <br />
      <Ref />
      <br />
      <Reducer />
    </div>
  )
}

export default App
