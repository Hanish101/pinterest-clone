import React from 'react'
import ExploreComp from "./ExploreComp"

export default function Explore() {
  return (
    <div className='explore'>
      <div className="explore-content">
        <h3>March 24, 2023</h3>
        <h1>Happy Birthday</h1>
        <div className="explore-body">
          <ExploreComp/>
          <ExploreComp/>
          <ExploreComp/>
          <ExploreComp/>
          <ExploreComp/>
        </div>
      </div>
      <div className="explore-content">
        <h3>March 23, 2023</h3>
        <h1>Happy day</h1>
        <div className="explore-body">
          <ExploreComp/>
          <ExploreComp/>
          <ExploreComp/>
        </div>
      </div>
    </div>
  )
}
