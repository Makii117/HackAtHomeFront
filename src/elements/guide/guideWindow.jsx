import React, { useState } from 'react';
import './guideWindow.scss';
import { Modal, Button } from 'antd';


export const GuideWindow = (guide) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };

return(
    
    <div className="guideWindow" >
       
    <div class="guide-cover"  > 
       <img src={guide.image} alt="generic img lol" width="25" height="25" class="guideIMG" onClick={showModal}/>
       <h2 onClick={showModal}>{guide.title}</h2> 
       <p onClick={showModal}>{guide.description}</p>
      
    
    <div class="modal-content">
    <Modal title="Full guide" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>{guide.fulldesc}</p>
    </Modal>
    </div>
    </div>
    </div>
    
   
)}




export default GuideWindow;

