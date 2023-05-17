import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
function Post({ user, postImage, likes, timestamp }) {
  return (
<div className='post'>
<div className='post_head'>
<div className='user'>
<Avatar>{user.charAt(0).toUpperCase()}</Avatar>
{user}*<span>{timestamp}</span>
</div>
</div>  

<div className='post_image'>

<img src={postImage} alt=''/></div>


<div className='post_foot'>
<div className='footer_icons'>
<div className='icons'>
<FavoriteIcon className="post_icon"/>
<ChatBubbleIcon className="post_icon"/>
<SendIcon className="post_icon"/>
</div>
<div className='post_saveicon'>
<BookmarkIcon className="post_icon"/>
</div>
</div>
Liked by {likes} people.
</div>
</div>

)
}

export default Post
 