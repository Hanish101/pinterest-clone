import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dropdown from './dropdown';

export default function Pin({pinSize}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (

    <div className= {`pin ${pinSize}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="pin-content">
        <img className='pin-image' src="https://random.imagecdn.app/500/800" alt="" />
      </div>
      {isHovered && (
        <button className="btn btn-secondary save-button" >
          Save
        </button>
      )}
      {isHovered && (
        <div className="icons">
          <div className="iconp">
            <ShareIcon className='icon'/>
          </div>
          <div className="iconp">
            <MoreHorizIcon className='icon'/>
          </div>
        </div>
      )}
      {isHovered && (
        <Dropdown/>
      )}
    </div>
  )
}
