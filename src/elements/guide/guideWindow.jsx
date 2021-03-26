import React from 'react';
import './guideWindow.scss';

export const GuideWindow = (guide) => {
   

return(
    
    <div className="guideWindow" onClick={function(event){
        if(event.target===modal){
            modal.style.display="none";
        }
    }}>
        <div onClick={maximize}>
       <img src={guide.image} alt="generic img lol" width="25" height="25"/>
       <h1>{guide.title}</h1> 
       <p>{guide.description}</p>
        
    <div id="myModal" class="modal">
    <div class="modal-content">
    <span class="close" onClick={minimize}>&times;</span> 
    <p>{guide.fulldesc}</p>
    </div>
    </div>
    </div>
    </div>
   
)}
var modal = document.getElementById("myModal");

const minimize = (modal)=> {
    modal.style.display = "none";

}
const maximize = (modal)=> {

    modal.style.display = "block";

}


export default GuideWindow;

