import { useFirestore } from 'reactfire';
import 'firebase/firestore';

export function usePost(){
  const firestore = useFirestore()
  
  const getPost = (postId:string)=>
    (new Promise((resolve:(doc:firebase.default.firestore.DocumentData)=>void, reject)=>{
      const ref = firestore.collection('Posts').doc(postId);
      ref.get().then((doc)=>{
        if(doc.exists) {
          const data = doc.data();
          if(data){
            resolve(data);
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
