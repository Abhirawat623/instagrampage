import React from 'react'
import './Nav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
function Nav() {
return (
  <div className='nav'>
    <img className='nav_logo'src='https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png' alt=''/>
  <div className='buttons'>
            <button className='button'>
            <HomeIcon/>
            <span> home</span></button>
            <button className='button'>
            <SearchIcon/>
            <span> Search</span></button>
            <button className='button'>
            <ExploreIcon/>
            <span> Explore</span></button>
            <button className='button'>
            <VideoCameraBackIcon/>
            <span> Camera</span></button>
            <button className='button'>
            <ModeCommentIcon/>
            <span> Messages</span></button>
            <button className='button'>
            <NotificationsIcon/>
            <span> Notificaions</span></button>
            <button className='button'>
            <AddBoxIcon/>
            <span> Create</span></button>
          
  </div>
  
  
  </div>
)
}

export default Nav
