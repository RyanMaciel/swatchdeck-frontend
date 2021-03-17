import React, { useState, useEffect } from 'react';
import img from '../Item/image1.png';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import styles from './DesignerItemsView.module.css';
import { useStorage, useUser, useFirestore } from 'reactfire';
import 'firebase/firestore';


function DesignerItemsView() {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const storageRef = useStorage().ref();

  let docs:Array<any>;
  let setDocs:(arg0:any)=>void;
  [docs, setDocs] = useState([]);
  useEffect(()=>{
    console.log("effect called.")
    firestore.collection('Posts').where('userId', '==', 'hGDbtN8YycdsnaA5UR1WCcihA5C2')
      .get()
      .then((res) => {
        const docArray:Array<object> = [];
        let count = 0;
        console.log(count);
        res.forEach((doc) => {
          storageRef.child(doc.data().imageIdentifier + '.jpg').getDownloadURL()
            .then((url)=>{
              count++;
              docArray.push({data: doc.data(), imageUrl: url});
              if(count == res.size){
                setDocs(docArray);
              }
            });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [])
    
  let thumbData:[any, string][] = [[img, 'yes'], [img, 'something else'], [img, 'the final thing'],
  [img, 'jk this is the final thing'], [img, ' thing']] 
  return (
    <div id={styles.container}>
        {
          docs.map((docObject)=>(
            <div className={styles.item}>
              <DesignerItemThumb img={docObject.imageUrl} title={docObject.data.title}/>
            </div>
            
          ))
        }
        {
          thumbData.map((item)=>{
            return (
              <div className={styles.item}>
                <DesignerItemThumb img={item[0]} title={item[1]}/>
              </div>
            )
          })
        }
    </div>
  );
}

export default DesignerItemsView;