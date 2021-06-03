import React from 'react';
import { Link } from "react-router-dom";
import gStyles from "./GlobalStyles.module.css";
import styles from './DesignerItemThumb.module.css';

type DesignerItemThumbProps = {
    img: any,
    title: string,
    className?: string,
    includeDesigner?: boolean,
    link?:string,
    designerImg?: any,
    text?:string
}

function DesignerItemThumb({img, title, includeDesigner=false, designerImg, link, text}:DesignerItemThumbProps) {
  return (
    <div id={styles.card} className={gStyles.roundBorder}>
        <div id={styles.imageContainer}>
          <Link to={link ? link : '/'}>
            <img src={img} className={styles.thumbImage}/>
          </Link>
        </div>
        <div className={gStyles.sepLine}/>
        <div id={styles.bodyContainer}>
            <div>
              <div className={gStyles.titleText}>{title}</div>
              <div className={gStyles.titleText} id={styles.designerName}>Ryan Maciel</div>
            </div>
            <div>
              <div className={gStyles.bodyText} id={styles.description}>
                {text}
              </div>
            </div>
        </div>
    </div>
  );
}

export default DesignerItemThumb;