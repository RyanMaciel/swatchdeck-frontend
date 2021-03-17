import React from 'react';
import 'firebase/storage';
import HeaderToolbar from '../../common/HeaderToolbar';
import { useStorage } from 'reactfire';

function Post(){

  // Create a root reference
  var storageRef = useStorage().ref();

  // Create a reference to 'mountains.jpg'
  const mountainsRef = storageRef.child('mountains.jpg');


  const inputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const files  = event.target.files;
    if(files){
      const file = files[0]
      mountainsRef.put(file).then((snapshot) => {
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