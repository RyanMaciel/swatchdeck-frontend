import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import img from '../Item/image1.png';
import styles from './DesignerProfile.module.css';
import { useDesigner } from '../../hooks/useDesigner';
import type { DesignerData } from '../../hooks/useDesigner';

function Designer() {

  const location = useLocation();
  let locationComponents = location.pathname.split('/')
  const designerId = locationComponents[locationComponents.length-1];
  
  const  {getDesignerInfo} = useDesigner();
  let designer: DesignerData | undefined;
  let setDesigner: (value:any)=>void;
  [designer, setDesigner] = useState()


  useEffect(()=>{
    getDesignerInfo(designerId)
      .then(setDesigner)
      .catch(console.log);
  },[])
  return (
    <div id={styles.container}>
        <div id={styles.topLeft}>
            <img id={styles.profileImage} src={img}/>

        </div>
        <div id={styles.topRight}>
            <span>{designer?.name}</span>
            <a href='/designer'>website</a>
            <div className='horizontal-divider'></div>
        </div>
        <div id={styles.bottomLeft}>
            
        </div>
        <div id='bottom-right'>
          {designer?.description}
        </div>
    </div>
  );
}

export default Designer;