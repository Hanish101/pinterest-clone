import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Explore from './Explore/Explore';
import Create from './Create/Create';
import NavBar from './Navbar/NavBar';
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';
import Account from './Account/Account';
import Messages from './messages/Messages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/create" element={<Create />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
