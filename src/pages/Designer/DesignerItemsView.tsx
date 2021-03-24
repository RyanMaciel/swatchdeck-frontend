import React, { useState, useEffect } from 'react';
import img from '../Item/image1.png';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import styles from './DesignerItemsView.module.css';
import { useDesigner } from '../../hooks/useDesigner';
import 'firebase/firestore';


function DesignerItemsView() {
  const designerId = "hGDbtN8YycdsnaA5UR1WCcihA5C2";

  let docs:Array<any>;
  let setDocs:(arg0:any)=>void;
  [docs, setDocs] = useState([]);

  const [getPosts] = useDesigner()
  useEffect(()=>{
    getPosts(designerId)
      .then(setDocs)
      .catch(()=>{console.log('error')})
  }, [])
  console.log(docs);
  let thumbData:[any, string][] = [[img, 'yes'], [img, 'something else'], [img, 'the final thing'],
  [img, 'jk this is the final thing'], [img, ' thing']] 
  return (
    <div id={styles.container}>
        {
          docs.map((docObject, i)=>(
            <div className={styles.item} key={i}>
              <DesignerItemThumb img={docObject.imageUrl} title={docObject.data.title} link={'/item/' + docObject.id}/>
            </div>
            
          ))
        }
        {
          thumbData.map((item, i)=>{
            return (
              <div className={styles.item} key={i}>
                <DesignerItemThumb img={item[0]} title={item[1]}/>
              </div>
            )
          })
        }
    </div>
  );
}

export default DesignerItemsView;