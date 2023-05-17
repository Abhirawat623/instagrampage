import React from 'react'
import './Sugestion.css';
import { Avatar } from '@mui/material';
function Sugestion() {
return (
<div className='sugestions'>
<div className='sugestions_title'>
  sugestions for you
</div>
<div className='sugestion_alluser'>

<div className='sugestion_user'>
<div className='user_left'>
<span className='Avatar'>
  <Avatar>R</Avatar>
</span>
<div className='user_info'>
<span className='user_name'>Abhi</span>
<span className='user_relation'>New To Insta</span>
</div>
</div>
<button className='follow_but'>Follow</button>
</div>

<div className='sugestion_user'>
<div className='user_left'>
<span className='Avatar'>
  <Avatar>R</Avatar>
</span>
<div className='user_info'>
<span className='user_name'>Abhi</span>
<span className='user_relation'>New To Insta</span>
</div>
</div>
<button className='follow_but'>Follow</button>
</div>

<div className='sugestion_user'>
<div className='user_left'>
<span className='Avatar'>
  <Avatar>R</Avatar>
</span>
<div className='user_info'>
<span className='user_name'>Abhi</span>
<span className='user_relation'>New To Insta</span>
</div>
</div>
<button className='follow_but'>Follow</button>
</div>

<div className='sugestion_user'>
<div className='user_left'>
<span className='Avatar'>
  <Avatar>R</Avatar>
</span>
<div className='user_info'>
<span className='user_name'>Abhi</span>
<span className='user_relation'>New To Insta</span>
</div>
</div>
<button className='follow_but'>Follow</button>
</div>

</div>
</div>
)
}

export default Sugestion
