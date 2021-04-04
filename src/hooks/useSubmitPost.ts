import { v4 as uuidv4 } from 'uuid';
import { useStorage, useUser, useFirestore } from 'reactfire';
import 'firebase/firestore';

export function useSubmitPost(){
  // Create a root reference
  var storageRef = useStorage().ref();

  const imageIdentifier = uuidv4();
  const postIdentifier = uuidv4();

  const { data: user } = useUser();
  const firestore = useFirestore();

  
  const submitPost = (files:FileList, title:string, description:string)=>{
    const timeStamp =  new Date().toUTCString();
    firestore.collection('Posts').doc(postIdentifier).set({
      title,
      description,
      imageIdentifier: imageIdentifier,
      timeStamp: timeStamp,
      userId: user.uid,
    }).then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    if(files){
      const imageRef = storageRef.child(imageIdentifier + ".jpg");
      const file = files[0]
      imageRef.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    }
  }
  return [submitPost];
}
