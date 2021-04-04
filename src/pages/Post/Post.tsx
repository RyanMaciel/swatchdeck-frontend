import React, { useState } from 'react';
import 'firebase/storage';
import HeaderToolbar from '../../common/HeaderToolbar';
import {useSubmitPost} from '../../hooks/useSubmitPost';
import { useStorage, useUser, useFirestore } from 'reactfire';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

function Post(){
  const [submitPost] = useSubmitPost();
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement> | null | undefined)=>{
    if(event){
      const files = event.target.files;
      if(files){
        submitPost(files, title, description);
      }
    }
  }
  type InputDescriptor = {
    label: string;
    name: string;
    updateFunction: (newInput: string)=>void;
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let files: React.ChangeEvent<HTMLInputElement> | null | undefined;
  let setFiles;
  [files, setFiles] = useState();

  let fields:Array<InputDescriptor> = [
    {label: 'Title: ', name: 'title_input', updateFunction: setTitle},
    {label: 'Description: ', name: 'description_input', updateFunction: setDescription}
  ]
  const handleSubmit = ()=>{
    onFileUpload(files);
  }
  return(
    <HeaderToolbar showPostButton={false}>
      <div>
        <form onSubmit={handleSubmit} >
          {fields.map((field:InputDescriptor)=>(
            <div style={{display:'flex'}}>
              <span>{field.label}</span>
              <input type="text" id={field.name} name={field.name} onChange={(e)=>field.updateFunction(e.target.value)} required/>
          </div>
          ))}
          
          <input type="file" onChange={onFileUpload} />
          <input type="submit" value="Submit"/>
        </form >
      </div>
    </HeaderToolbar>
  )
}

export default Post;