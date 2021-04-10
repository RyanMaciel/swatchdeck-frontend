import { useStorage, useFirestore } from 'reactfire';
import 'firebase/firestore';

type DesignerData = {
  name: string;
  description?: string;
  id: string;
}

export function useDesigner(){
  const firestore = useFirestore()
  
  const storageRef = useStorage().ref();

  const getPosts = (userId: string)=>new Promise<Array<object>>((resolve, reject) => {
    firestore.collection('Posts').where('userId', '==', userId)
    .get()
    .then((res) => {
      if(res.empty){
        return reject('No matching entries found')
      }
      const docArray:Array<object> = [];
      let count = 0;
      res.forEach((doc) => {
        storageRef.child(doc.data().imageIdentifier + '.jpg').getDownloadURL()
        .then((url)=>{
          count++;
          docArray.push({data: doc.data(), imageUrl: url, id:doc.id});
          if(count == res.size){
            resolve(docArray);
          }
        }).catch(reject);
      });
    })
    .catch(reject);
  });

  const getDesignerInfo = (designerId: string)=>new Promise<DesignerData>((resolve, reject) => {
    firestore.collection('Designers').doc(designerId)
    .get()
    .then((doc) => {
      if(doc.exists){
        const data = doc.data()
        if(data && data.name){
          data.id = doc.id;
          resolve(data as DesignerData);
        }else{
          reject('empty or mismatched data')
        }
        reject('document does not exist')
      }
      
    })
    .catch(reject);
  });
  
  const getDesignerFromUserId = (userId:string)=>new Promise<DesignerData>((resolve, reject)=>{
    firestore.collection('Designers').where('userId', '==', userId).get()
    .then((res)=>{
      if(res.empty){
        return reject('No matching entries found')
      }
      
      res.forEach((doc) => {
        const data = doc.data();
        if(data){
          data.id = doc.id;
          return resolve(data as DesignerData);
        } else{
          return reject('designer had incorrect data');
        }
      });
    });
  });

  return {getPosts, getDesignerInfo, getDesignerFromUserId}
}
 export type {DesignerData};