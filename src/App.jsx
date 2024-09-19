import Main from '../pages/Main';
import Notifications from '../pages/Notifications';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import Sidebar from './components/Sidebar';
import './css/style.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="mainContainer">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
