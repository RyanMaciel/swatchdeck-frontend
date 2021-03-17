import React from 'react';
import img from '../Item/image1.png';
import styles from './DesignerProfile.module.css';
function Designer() {
  return (
    <div id={styles.container}>
        <div id={styles.topLeft}>
            <img id={styles.profileImage} src={img}/>

        </div>
        <div id={styles.topRight}>
            <span>Designer Name</span>
            <a href='/designer'>website</a>
            <div className='horizontal-divider'></div>
        </div>
        <div id={styles.bottomLeft}>
            
        </div>
        <div id='bottom-right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
  );
}

export default Designer;