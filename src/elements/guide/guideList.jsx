import React from 'react';
import GuideWindow from './guideWindow';
import './guideList.scss';
import {data} from "../../pages/Guide/guideData.json"

export const GuideList = ()=>{
    return (
    <div className="guideList">
         {data.map((guide,key)=>{
        return(
          <div key={key}>
      <GuideWindow id={guide.id} image={guide.image} title={guide.title}  description={guide.description} fulldesc={guide.fulldesc} />
      </div>
        )  
    })
}
    </div>
    )
}
export default GuideList