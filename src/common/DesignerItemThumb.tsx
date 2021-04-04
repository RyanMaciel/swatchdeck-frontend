import React from 'react';
import { Link } from "react-router-dom";
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
    <Link to={link ? link : '/'}>
        <div id={styles.card}>
            <img src={img} className={styles.thumbImage}/>
            <div>
                {title}
                <div className={styles.textContainer}>
                  {text}
                </div>
            </div>
        </div>
    </Link>
  );
}

export default DesignerItemThumb;