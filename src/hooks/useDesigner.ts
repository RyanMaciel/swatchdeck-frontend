import { useStorage, useFirestore } from 'reactfire';
import 'firebase/firestore';
import type {PostData} from './DataTypes';

type DesignerData = {
  name: string;
  description?: string;
  id: string;
}

export function useDesigner(){
  const firestore = useFirestore()
  
  const storageRef = useStorage().ref();

  const getPosts = (userId: string)=>new Promise<Array<PostData>>((resolve, reject) => {
    firestore.collection('Posts').where('designerId', '==', userId)
    .get()
    .then((res) => {
      if(res.empty){
        return reject('No matching entries found')
      }
      const docArray:Array<PostData> = [];
      res.forEach((doc) => {
        console.log(doc.data());
        docArray.push({data: doc.data(), id:doc.id});
      });
      resolve(docArray);
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