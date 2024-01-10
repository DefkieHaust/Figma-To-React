import { Routes, Route } from 'react-router-dom'
import Main from "./components/layout/Main"
import Home from "./components/layout/Home"
import Join from "./components/layout/Join"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
        <Route path="/join" element={<Join/>} /> 
      </Route>
    </Routes>
  )
}

export default App