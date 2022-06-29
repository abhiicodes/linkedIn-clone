import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {


    const newsArticle = (heading, subtitle) =>{
        return(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
   ) }
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Github Copilot","10 mins read - 500 readers")}
        {newsArticle("Masai School Turns Unicorn","12 mins read - 5700 readers")}

        {newsArticle("Top apps for coding","90 mins read - 5050 readers")}

        {newsArticle("React Native vs Flutter","20 mins read - 100 readers")}


        {newsArticle("Springboot gets new update","18 mins read - 600 readers")}

    </div>
  )
}

export default Widgets