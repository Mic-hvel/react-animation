import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
      </Routes>
    </>
  )
}

export default App
