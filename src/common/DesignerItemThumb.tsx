import React from 'react';
import { Link } from "react-router-dom";
import styles from './DesignerItemThumb.module.css';

type DesignerItemThumbProps = {
    img: any,
    title: string,
    className?: string,
    includeDesigner?: boolean,
    link?:string,
    designerImg?: any
}

function DesignerItemThumb({img, title, includeDesigner=false, designerImg, link}:DesignerItemThumbProps) {
  return (
    <Link to={link ? link : '/'}>
        <div id={styles.card}>
            <img src={img}/>
            <div>
                {title}
            </div>
        </div>
    </Link>
  );
}

export default DesignerItemThumb;