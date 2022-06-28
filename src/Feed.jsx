import React from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';

import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';



import InputOption from './InputOption';
function Feed() {
  return (
    <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                <InputOption Icon = {ImageIcon} title = "Photo" color="#70B5F9" />
                <InputOption Icon = {SubscriptionIcon} title = "Video" color="#E7A33E" />
                <InputOption Icon = {EventNoteIcon} title = "Event" color="#C0CbCD" />
                <InputOption Icon = {CalendarViewDayIcon} title = "Write Article" color="#7FC15E" />
                </div>
            </div>
    </div>
  )
}

export default Feed