import React from 'react';
import 'firebase/storage';
import HeaderToolbar from '../../common/HeaderToolbar';
import { useStorage, useUser, useFirestore } from 'reactfire';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function Post(){

  // Create a root reference
  var storageRef = useStorage().ref();

  // Create a reference to 'mountains.jpg'
  const imageIdentifier = uuidv4();
  const postIdentifier = uuidv4();

  const { data: user } = useUser();
  const firestore = useFirestore();
  console.log(user);
  const inputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{


    const timeStamp =  new Date().toUTCString();
    firestore.collection('Posts').doc(postIdentifier).set({
      title: 'This is a post',
      imageIdentifier: imageIdentifier,
      timeStamp: timeStamp,
      userId: user.uid,
    }).then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });


    const files = event.target.files;
    if(files){
      const imageRef = storageRef.child(imageIdentifier + ".jpg");
      const file = files[0]
      imageRef.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    }

  }
  return(
    <HeaderToolbar showPostButton={false}>
      <div>
      <input type="file" onChange={inputChange} />
      </div>
    </HeaderToolbar>
  )
}

export default Post;