import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ScrollToTop, Sidebar } from "./components"
import { Error, Home, Stats, Upgrades, Posts } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/upgrades" element={<Upgrades />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
