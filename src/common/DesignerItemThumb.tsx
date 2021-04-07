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
    <div id={styles.card}>
        <Link to={link ? link : '/'}>
          <img src={img} className={styles.thumbImage}/>
        </Link>
        <div>
            {title}
            <div className={gStyles.bodyText}>
              {text}
            </div>
        </div>
    </div>
  );
}

export default DesignerItemThumb;