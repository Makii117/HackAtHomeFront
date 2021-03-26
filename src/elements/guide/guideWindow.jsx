import React from 'react';
import './guideWindow.scss';

export const GuideWindow = (guide) => {
   
return(
    
    <div className="guideWindow" onClick={
        console.log("Hello")
    }>
    <div class="guide-cover"> 
       <img src={guide.image} alt="generic img lol" width="25" height="25" class="guideIMG"/>
       <h2>{guide.title}</h2> 
       <p>{guide.description}</p>
        
    
    <div class="modal-content">
    
   
    <p>{guide.fulldesc}</p>

    </div>
    </div>
    </div>
   
   
)}




export default GuideWindow;

