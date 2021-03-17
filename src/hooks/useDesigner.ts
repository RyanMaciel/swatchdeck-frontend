import { useStorage, useFirestore } from 'reactfire';
import 'firebase/firestore';

export function useDesigner(){
  const firestore = useFirestore()
  
  const storageRef = useStorage().ref();

  const getPosts = (userId: string)=>new Promise((resolve:(docArray: Array<object>)=>void, reject) => {
    firestore.collection('Posts').where('userId', '==', userId)
    .get()
    .then((res) => {
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
  
  return [getPosts]
}
