import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:slug" element={<Blog />}></Route>
        <Route paht="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
