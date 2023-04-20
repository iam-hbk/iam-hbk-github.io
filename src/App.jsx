
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import AppBar from './components/AppBar'

function App() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  )
}

export default App
