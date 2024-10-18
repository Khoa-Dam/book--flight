import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
function App() {

  return (
    <>
      <div className='bg-black flex-col'>
        <div className="relative">
          <Header />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
