import { v4 as uuidv4 } from 'uuid';
import { useStorage, useUser, useFirestore } from 'reactfire';
import { useDesigner } from './useDesigner';
import type { DesignerData } from './useDesigner';

import 'firebase/firestore';

export function useSubmitPost(){
  // Create a root reference
  var storageRef = useStorage().ref();

  const imageIdentifier = uuidv4();
  const postIdentifier = uuidv4();

  const { data: user } = useUser();
  const firestore = useFirestore();

  const { getDesignerFromUserId } = useDesigner()

  
  const submitPost = (files:FileList, title:string, description:string)=>
    new Promise<string>((resolve, reject)=>{
      debugger;
      getDesignerFromUserId(user.uid).then((designer: DesignerData)=>{

        const submitMetadata = (imageUrls: string[])=>new Promise<any>((resolve, reject)=>{
          const timeStamp =  new Date().toUTCString();
          firestore.collection('Posts').doc(postIdentifier).set({
            title,
            description,
            imageUrls: imageUrls,
            timeStamp: timeStamp,
            userId: user.uid,
            designerId: designer.id,
          }).then(() => {
            return resolve("Document successfully written!");
          })
          .catch((error) => {
              reject("Error writing document: " + error);
          });
        })

        if(files){
          const imageRef = storageRef.child(imageIdentifier + ".jpg");
          const file = files[0]
          imageRef.put(file).then((snapshot) => {
            imageRef.getDownloadURL().then((url: string)=>{
              submitMetadata([url]).then(resolve).catch(reject)
            }).catch(()=>reject("Could not establish image url"))
            console.log('Uploaded a blob or file!');
          }).catch(()=>reject("Could not upload file."));
        } else {
          return submitMetadata([]).then(resolve).catch(reject);
        }
    
      }).catch(()=>reject('Could not find Designer id'));
    });
   
  return [submitPost];
}
