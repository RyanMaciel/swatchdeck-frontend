import React, { useState, useEffect } from 'react';
import img from '../Item/image1.png';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import styles from './DesignerItemsView.module.css';
import { useDesigner } from '../../hooks/useDesigner';
import 'firebase/firestore';


function DesignerItemsView() {
  const designerId = "fzxwdyEFmgKma68e7SH7";

  let docs:Array<any>;
  let setDocs:(value:any)=>void;
  [docs, setDocs] = useState([]);

  const {getPosts} = useDesigner()
  useEffect(()=>{
    getPosts(designerId)
      .then(setDocs)
      .catch((err)=>{console.log('error getting designer items: '); console.log(err)})
  }, [])
  console.log(docs);
  return (
    <div id={styles.container}>
        {
          docs.map((docObject, i)=>(
            <div className={styles.item} key={i}>
              <DesignerItemThumb img={docObject.data.imageUrls[0]} title={docObject.data.title} link={'/item/' + docObject.id}/>
            </div>
            
          ))
        }
    </div>
  );
}

export default DesignerItemsView;