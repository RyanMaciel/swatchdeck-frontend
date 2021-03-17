import { v4 as uuidv4 } from 'uuid';
import { useStorage, } from 'reactfire';
import 'firebase/firestore';

export function useImages(){
  const storageRef = useStorage().ref();

  const getImageUrl = (imageId:string)=>
    new Promise((resolve:(url:string)=>void, reject)=>{
      storageRef.child(imageId + '.jpg').getDownloadURL()
      .then((url)=>{
        resolve(url);
      }).catch(reject);
    })
  return [getImageUrl]
}
