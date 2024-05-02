import React, { useState } from 'react'
import Add from '../Components/Add'
import {Link} from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  const [addVideoResponse,setAddVideoResponse] = useState()
  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All videos</h3>
          <View addVideoResponse={addVideoResponse}/>
        </div>
        <div className="col-lg-6">
          <Category/>
        </div>
      </div>
    </>
  )
}

export default Home