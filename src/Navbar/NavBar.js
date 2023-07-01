import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/pinterest-log0.png'
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

function NavBar() {
      return (
            <div className='navbar'>
                  <img className="nav-img" src={image} alt="Image123" />
                  <Link to="/" className="nav-item">
                        <div className="nav-btn">Home</div>
                  </Link>
                  <Link to="/explore" className="nav-item">
                        <div className="nav-btn">Explore</div>
                  </Link>
                  <Link to="/create" className="nav-item">
                        <div className="nav-btn">Create</div>
                  </Link>
                  <input placeholder='search' className="nav-item nav-search"/>
                  <div className="nav-right-container">
                        <Link to="/notification" className="nav-item">
                              <div className="nav-btn">
                                    <NotificationsActiveTwoToneIcon/>
                              </div>
                        </Link>
                        <Link to="/messages" className="nav-item">
                              <div className="nav-btn">
                                    <ChatBubbleTwoToneIcon/>
                              </div>
                        </Link>
                        <Link to="/profile" className="nav-item">
                              <div className="nav-btn">
                                    <PeopleAltTwoToneIcon/>
                              </div>
                        </Link>
                        <Link to="/account" className="nav-item">
                              <div className="nav-btn">
                                    <ExpandMoreTwoToneIcon/>
                              </div>
                        </Link>
                  </div>
            </div>
      );
}

export default NavBar;