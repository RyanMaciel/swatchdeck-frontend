import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Paper from '../../common/Paper';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import HeaderToolbar from '../../common/HeaderToolbar';
import img from '../Item/image1.png';
import styles from './Feed.module.css';
import { useFeed } from '../../hooks/useFeed';

type DesignerItemThumbProps = {
  designerImg: any,
}
function FeedPostHeader({designerImg, children}:DesignerItemThumbProps | React.PropsWithChildren<any>){
  return (
    <div className={styles.feedPostHeaderContainer}>
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

  type PostData = {
    title?:string;
    imageIdentifier?:string;
    imageUrl?:string;
    description?:string;
    userId?:string;
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
        <Paper>
          {docs.map((post)=>(
            <div className={styles.feedItemContainer}>
              <DesignerItemThumb img={post.imageUrl} title={post.title ? post.title : "nothing"} includeDesigner={true} designerImg={img}/>
            </div>
          ))}
          {multitypeData.map((item:FeedItem, index)=>{
            return (
              <div className={styles.feedEntryContainer} key={index}>
                <FeedPostHeader designerImg={img}>
                  {item.type === 'item' &&
                    <div className={styles.feedItemContainer}>
                      <DesignerItemThumb img={item.contents.image} title={item.contents.text} includeDesigner={true} designerImg={img}/>
                    </div>
                  }
                  {item.type === 'text' &&
                    <div className={styles.feedTextContainer} key={index}>
                      {item.contents.text}
                    </div>
                  }
                </FeedPostHeader>
              </div>
            )
            
          })}
        </Paper>
      </div>
    </HeaderToolbar>
  );
}

export default Designer;