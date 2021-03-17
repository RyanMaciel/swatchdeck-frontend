import React from 'react';
import styles from './HeaderToolbar.module.css';
import { Link } from "react-router-dom";

// type DesignerItemThumbProps = {
//     img: any,
//     title: string,
//     className?: string
// }

function HeaderToolbar(props: React.PropsWithChildren<any>) {
  return (
    <div id={styles.container}>
        <div id={styles.toolbarContainer}>
            <Link to='/feed'>FEED</Link>
        </div>
        <div id={styles.pageContent}>
            {props.children}
        </div>
    </div>
  );
}

export default HeaderToolbar;