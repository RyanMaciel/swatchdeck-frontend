import React, {useEffect, useState} from 'react';
import { Link, useLocation,  } from "react-router-dom";
import styles from './Item.module.css';
import image from './image1.png';
import ImageGallery from './ImageGallery';
import SourceMaterialView from './SourceMaterialView';
import Paper from '../../common/Paper';
import HeaderToolbar from '../../common/HeaderToolbar';
import { usePost } from '../../hooks/usePost'
import { useImages } from '../../hooks/useImages'
import type {PostData} from '../../hooks/DataTypes';
import 'firebase/firestore';


function Item() {
  // Get post id from url: /item/<postid>.
  const location = useLocation();
  let locationComponents = location.pathname.split('/')
  const postId = locationComponents[locationComponents.length-1];

  const [getPost] = usePost();
  const [getImageUrl] = useImages()


  let postData:PostData|undefined;
  let updatePostData:(data:PostData|undefined)=>void;
  [postData, updatePostData] = useState();
  
  useEffect(()=>{
    console.log("effectCalled:");
    getPost(postId).then((doc)=>{
      updatePostData(doc);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);



  return (
    <HeaderToolbar>
      <div id={styles.container}>
        <Paper>
          <div id={styles.imagesContainer}>
            <div id={styles.imageSidebarContainer}>
              <span className={styles.header}>{postData?.data.title}</span>
              <div className={styles.horizontalDivider}></div>
              <Link to={{pathname: '/designer/' + postData?.data.designerId}}>Designer Profile</Link>
              <p><span><b className={styles.box}>Date:</b> 1999</span></p>
              <p><span><b className={styles.box}>Material:</b> cotton</span></p>
              <p><span><b className={styles.box}>Country:</b> US</span></p>
              <p><span><b className={styles.box}>Status:</b> <span>Designer Collection</span></span></p>
              <p><span><b className={styles.box}>Description: </b>{postData?.data.description}</span></p>
              <div className={styles.horizontalDivider}></div>
            </div>
            <div id={styles.divider}></div>
            <div id={styles.rightSideContainer}>    
              <div id={styles.largeImageContainer}>
                <ImageGallery imageNames={[postData?.data.imageUrls]}/>
              </div>
              <SourceMaterialView/>
            </div>
          </div>
        </Paper>
      </div>
    </HeaderToolbar>
  );
}

export default Item;