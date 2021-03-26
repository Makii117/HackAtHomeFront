import React from "react";
import GuideWindow from "../../elements/guide/guideWindow";
import {data} from "./guideData.json";
import "./Guide.scss";

export const Guide = () =>{
  
return (
    <>
    
    <div className="guide-container">
     
      {data.map((guide,key)=>{
        console.log(guide)
        return(

          <div key={key}>
      <GuideWindow id={guide.id} image={guide.image} title={guide.title}  description={guide.description} />
      </div>
        )  
    })
    
    }
    </div>;
    </>
);


    }
export default Guide;