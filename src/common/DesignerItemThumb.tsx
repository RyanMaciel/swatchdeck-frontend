import React from 'react';
import styles from './DesignerItemThumb.module.css';
import { Link } from "react-router-dom";

type DesignerItemThumbProps = {
    img: any,
    title: string,
    className?: string,
    includeDesigner?: boolean,
    designerImg?: any
}

function DesignerItemThumb({img, title, includeDesigner=false, designerImg}:DesignerItemThumbProps) {
  return (
    <Link to="/">
        <div id={styles.card}>
            {includeDesigner &&
              <Link to="/designer">

                <div id={styles.profileHeader}>
                  <img id={styles.designerProfileImage} src={designerImg}/>
                  Designer
                </div>
              </Link>
            }
            <img src={img}/>
            <div>
                {title}
            </div>
        </div>
    </Link>
  );
}

export default DesignerItemThumb;