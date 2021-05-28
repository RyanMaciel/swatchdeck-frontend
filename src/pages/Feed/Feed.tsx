import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import DesignerItemThumb from '../../common/DesignerItemThumb';
import HeaderToolbar from '../../common/HeaderToolbar';
import img from '../Item/image1.png';
import gStyles from '../../common/GlobalStyles.module.css';
import styles from './Feed.module.css';
import { useFeed } from '../../hooks/useFeed';
import type { PostData } from '../../hooks/DataTypes';
type DesignerItemThumbProps = {
  designerImg: any,
  designerId?: string,
}
function FeedPostHeader({designerImg, designerId, children}:DesignerItemThumbProps | React.PropsWithChildren<any>){
  return (
    <div className={[styles.feedPostHeaderContainer, gStyles.header, gStyles.border].join(' ')}>
      <Link to={"/designer/" + designerId}>
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

  const [getPosts] = useFeed()
  let docs:Array<PostData>;
  let setDocs:(arg0:any)=>void;
  [docs, setDocs] = useState([]);

  useEffect(()=>{
    getPosts()
      .then(setDocs)
      .catch((err)=>{console.log(err)})
  }, [])

  //console.log(docs);
  docs = [{id: '1', data:{designerId: "designerId", title: "This is the post title", description: "This is the post description- chess board midi keyboardaslk'dfja;dslkfjasdlk;fjads lkfnasdo'ifljsnad;fjln asio'fn sadlfk jasdofn asdolfjk asdl;kfj asdokfln asdfoi kadsnf o'aklsdfn als;dk "}}]
  return (
    <HeaderToolbar>
      <div id={styles.feedContainer}>
        {docs.map((post)=>(
          <div className={[styles.feedItemContainer, gStyles.content].join(" ")}>
            <FeedPostHeader designerImg={img} designerId={post.data.designerId}>
              <DesignerItemThumb img={post.data.imageUrls && post.data.imageUrls[0]}
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