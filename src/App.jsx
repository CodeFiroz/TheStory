import Main from '../pages/Main'
import Notifications from '../pages/Notifications'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Search from '../pages/Search'
import SignIn from '../pages/SignIn'
import Sidebar from './components/Sidebar'
import './css/style.css'

function App() {

  return (
    <>
    
    <div className="mainContainer">

    <Sidebar />

    <Main />

  </div>

    </>
  )
}

export default App
