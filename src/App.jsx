import { Routes, Route } from 'react-router-dom'
import Main from "./components/layout/Main"
import Home from "./components/layout/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
      </Route> 
    </Routes>
  )
}

export default App