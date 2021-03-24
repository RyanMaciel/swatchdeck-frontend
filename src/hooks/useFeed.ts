import { useStorage, useFirestore } from 'reactfire';
import 'firebase/firestore';

export function useFeed(){
  const firestore = useFirestore()
  
  const storageRef = useStorage().ref();

  const getPosts = ()=>new Promise((resolve:(docArray: Array<object>)=>void, reject) => {
    firestore.collection('Posts')
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
        }).catch(()=>{
          count++;
          docArray.push({data: doc.data(), imageUrl: "none", id:doc.id});
          if(count == res.size){
            resolve(docArray);
          }
        });
      });
    })
    .catch(reject);
  });
  
  return [getPosts]
}
