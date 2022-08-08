import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>React Router Dom</h1>
              <h2>Homepage</h2>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <div>
              <h1>About Thomas Sankara</h1>
            </div>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div>
              <h1>This page does not exist</h1>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Homepage</Link>
          </li>
          <li>
            <Link to="/about">About Myself</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
