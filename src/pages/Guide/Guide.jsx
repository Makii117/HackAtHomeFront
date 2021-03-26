import React from "react";
import "./Guide.scss";
import GuideList from "../../elements/guide/guideList"
import SearchBox from "../../components/SearchBox/SearchBox"
import Lout from "../../components/Layout/Layout.jsx";

export const Guide = () =>{


return (
    <>

 <Lout >
   
   {<GuideList/>}
 </Lout>
    </>
);


    }
export default Guide;