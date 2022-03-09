import React from 'react'

import './index.css'

import Topbar from '../../components/topbar/Topbar';

import NewsPage from './components/NewsPage';
function News() {
    return (
       
        <>
        <Topbar />

        <div className="homeContainer">
          {/* <Sidebar /> */}
          <NewsPage/>
          {/* <Feed/> */}
          {/* <Rightbar/> */}
        </div>
        {/* <Dashboard/> */}
      </>
        
    )
}

export default News


