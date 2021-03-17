import React from 'react';
import 'firebase/storage';
import HeaderToolbar from '../../common/HeaderToolbar';
import {useSubmitPost} from '../../hooks/useSubmitPost';
import { useStorage, useUser, useFirestore } from 'reactfire';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function Post(){
  const [submitPost] = useSubmitPost();
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const files = event.target.files;
    if(files){
      submitPost(files);
    }
  }
  type InputDescriptor = {
    label: string;
    name: string;
  }
  let fields:Array<InputDescriptor> = [
    {label: 'Title: ', name: 'title_input'},
    {label: 'Description: ', name: 'description_input'}
  ]
  return(
    <HeaderToolbar showPostButton={false}>
      <div>
        {fields.map((field:InputDescriptor)=>(
          <div style={{display:'flex'}}>
            <span>{field.label}</span>
            <input type="text" id={field.name} name={field.name} required/>
        </div>
        ))}
        
        <input type="file" onChange={onFileUpload} />
      </div>
    </HeaderToolbar>
  )
}

export default Post;