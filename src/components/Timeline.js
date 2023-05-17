import React, { useState } from 'react'
import './Timeline.css';
import Sugestion from './Sugestion';
import Post from './Post';

function Timeline() {
  const [profile,setProfile] = useState([
    {
        user:"Tony",
        postImage:"https://thehardtimes.net/wp-content/uploads/2020/10/tony-stark.jpg",
        likes:3000,
        timestamp:"5days",
      },
      {
        user:"Steve",
        postImage:"https://media.comicbook.com/2021/04/steve-rogers-1264749.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart",
        likes:1212,
        timestamp:"9days",
      },
      {
        user:"Thor",
        postImage:"https://nypost.com/wp-content/uploads/sites/2/2017/11/mcdthra_ec010.jpg?quality=90&strip=all&w=1200",
        likes:43223,
        timestamp:"2days",
      },
      {
        user:"Rocket",
        postImage:"https://lrmonline.com/wp-content/uploads/2017/09/Rocket-Raccoon-2-1024x576.jpg",
        likes:2323,
        timestamp:"8days",
      },
      {
        user:"Tom",
        postImage:"https://wallup.net/wp-content/uploads/2019/07/24/339312-amazing-spider-man-2-action-adventure-fantasy-comics-movie-spider-spiderman-marvel-superhero.jpg",
        likes:23,
        timestamp:"15days",
      },
      {
        user:"Steven Strange",
        postImage:"https://i.ytimg.com/vi/i2oozfGOQno/maxresdefault.jpg",
        likes:9223,
        timestamp:"1days",
      },
      {
        user:"Mark",
        postImage:"https://static.wixstatic.com/media/c67895_b503abc2f3274fa48e5223fb9e995494~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/c67895_b503abc2f3274fa48e5223fb9e995494~mv2.jpg",
        likes:2,
        timestamp:"9days",
      }]);
  return (
    <div className="timeline">
    <div className='timeline_left'>Timeline
    <div className='post'>
    {profile.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
      
      </div>
      </div>
    <div className='timeline_right'><Sugestion/></div>
    </div>
  )
}

export default Timeline
