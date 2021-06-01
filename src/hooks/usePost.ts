import { useFirestore } from 'reactfire';
import 'firebase/firestore';
import type {PostData} from './DataTypes';

export function usePost(){
  const firestore = useFirestore()
  
  const getPost = (postId:string)=>
    (new Promise((resolve:(doc:PostData)=>void, reject)=>{
      const ref = firestore.collection('Posts').doc(postId);
      ref.get().then((doc)=>{
        if(doc.exists) {
          const data = doc.data();
          if(data){
            resolve({data:data, id: doc.id});
          }else{
            reject('doc data does not exist')
          }   
        }else{
          reject('doc does not exist');
        }
      }).catch(reject);
    })
  )
  return [getPost]
}
