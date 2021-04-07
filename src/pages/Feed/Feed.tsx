import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import DesignerItemThumb from '../../common/DesignerItemThumb';
import HeaderToolbar from '../../common/HeaderToolbar';
import img from '../Item/image1.png';
import gStyles from '../../common/GlobalStyles.module.css';
import styles from './Feed.module.css';
import { useFeed } from '../../hooks/useFeed';

type DesignerItemThumbProps = {
  designerImg: any,
}
function FeedPostHeader({designerImg, children}:DesignerItemThumbProps | React.PropsWithChildren<any>){
  return (
    <div className={[styles.feedPostHeaderContainer, gStyles.header].join(' ')}>
      <Link to="/designer">
        <div className={styles.profileHeader}>
          <img className={styles.designerProfileImage} src={designerImg}/>
          Designer
        </div>
      </Link>
      <div>
        {children}
      </div>
    </div>
  )
}

function Designer() {

  type EmbededPostData = {
    imageIdentifier?:string;
    description?:string;
    userId?:string;
    title?:string;
  }
  type PostData = {
    id?:string;
    data: EmbededPostData;
    imageUrl?:string;
  }
  const [getPosts] = useFeed()
  let docs:Array<PostData>;
  let setDocs:(arg0:any)=>void;
  [docs, setDocs] = useState([]);

  useEffect(()=>{
    getPosts()
      .then(setDocs)
      .catch((err)=>{console.log(err)})
  }, [])

  type FeedContents = {
    image?: any,
    text: string,
  }
  type FeedItem = {
    type: string;
    contents: FeedContents;
  };
  let multitypeData:FeedItem[] = [
    {
      type: 'item',
      contents:{
        image: img,
        text: 'yes'
      }
    },
    {
      type: 'item',
      contents:{
        image: img,
        text: 'something else'
      }
    },
    {
      type: 'item',
      contents:{
        image: img,
        text: 'the final thing'
      }
    },
    {
      type: 'item',
      contents:{
        image: img,
        text: 'jk this is the final thing'
      }
    },
    {
      type: 'text',
      contents:{
        text: 'This is a very cool but also long text post about how things are super cool and i want to post them yuh.'
      }
    }
  ]
  return (
    <HeaderToolbar>
      <div id={styles.feedContainer}>
        {docs.map((post)=>(
          <div className={[styles.feedItemContainer, gStyles.content].join(" ")}>
            <FeedPostHeader designerImg={img}>
              <DesignerItemThumb img={post.imageUrl}
                title={post.data.title ? post.data.title : "nothing"}
                includeDesigner={true}
                designerImg={img}
                text={post.data.description}
              />
            </FeedPostHeader>
          </div>
        ))}
      </div>
    </HeaderToolbar>
  );
}

export default Designer;