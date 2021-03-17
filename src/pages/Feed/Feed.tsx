import React from 'react';
import { Link } from "react-router-dom";
import Paper from '../../common/Paper';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import HeaderToolbar from '../../common/HeaderToolbar';
import img from '../Item/image1.png';
import styles from './Feed.module.css';

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