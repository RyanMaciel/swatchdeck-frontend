import React from 'react';
import styles from './DesignerItemThumb.module.css';
import { Link } from "react-router-dom";

type DesignerItemThumbProps = {
    img: any,
    title: string,
    className?: string
}

function DesignerItemThumb({img, title}:DesignerItemThumbProps) {
  return (
    <Link to="/">
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