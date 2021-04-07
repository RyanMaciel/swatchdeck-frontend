import React, { useState, useEffect } from 'react';
import img from '../Item/image1.png';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import styles from './DesignerItemsView.module.css';
import { useDesigner } from '../../hooks/useDesigner';
import 'firebase/firestore';


function DesignerItemsView() {
  const designerId = "hGDbtN8YycdsnaA5UR1WCcihA5C2";

  let docs:Array<any>;
  let setDocs:(value:any)=>void;
  [docs, setDocs] = useState([]);

  const {getPosts} = useDesigner()
  useEffect(()=>{
    getPosts(designerId)
      .then(setDocs)
      .catch(()=>{console.log('error')})
  }, [])

  return (
    <div id={styles.container}>
        {
          docs.map((docObject, i)=>(
            <div className={styles.item} key={i}>
              <DesignerItemThumb img={docObject.imageUrl} title={docObject.data.title} link={'/item/' + docObject.id}/>
            </div>
            
          ))
        }
    </div>
  );
}

export default DesignerItemsView;