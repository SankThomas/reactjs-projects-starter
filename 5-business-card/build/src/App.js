import { useState } from "react"
import Home from "./components/Home"
import View from "./components/View"

function App() {
  const [showView, setShowView] = useState(false)

  return (
    <>
      <div>
        {!showView && <Home showView={showView} setShowView={setShowView} />}
        {showView && <View showView={showView} setShowView={setShowView} />}
      </div>
    </>
  )
}

export default App
