import React from 'react';
import SavedComp from '../saved-component/SavedComp';

export default function Profile() {
  return (
    <div className='profile'>
      <div className="pro-logo">H</div>
      <h1 className="pro-name">User Name</h1>
      <h6 className="pro-username">@username123</h6>
      <h5 className="pro-following">34 following</h5>
      <div>
        <button className="btn btn-light mr-4">Share</button>
        <button className="btn btn-light">Edit Profile</button>
      </div>

      <h3 className="saved mt-5">Saved</h3>
      <div className="saved-compo">
        <SavedComp/>
        <SavedComp/>
        <SavedComp/>
        <SavedComp/>
        <SavedComp/>
        <SavedComp/>
        <SavedComp/>
      </div>
    </div>
  )
}
