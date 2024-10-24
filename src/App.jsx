import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
function App() {

  return (
    <>
      <div className='relative flex-col h-max'>
        <div className="">
          <Header />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
