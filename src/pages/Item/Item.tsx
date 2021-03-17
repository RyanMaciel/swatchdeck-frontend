import React from 'react';
import { Link } from "react-router-dom";
import styles from './Item.module.css';
import image from './image1.png';
import ImageGallery from './ImageGallery';
import SourceMaterialView from './SourceMaterialView';
import Paper from '../../common/Paper';
import HeaderToolbar from '../../common/HeaderToolbar';

function Item() {
  return (
    <HeaderToolbar>
      <div id={styles.container}>
        <Paper>
          <div id={styles.imagesContainer}>
            <div id={styles.imageSidebarContainer}>
              <span className={styles.header}>Coat #123 Experiment</span>
              <div className={styles.horizontalDivider}></div>
              <Link to="designer">Designer Profile</Link>
              <p><span><b className={styles.box}>Date:</b> 1999</span></p>
              <p><span><b className={styles.box}>Material:</b> cotton</span></p>
              <p><span><b className={styles.box}>Country:</b> US</span></p>
              <p><span><b className={styles.box}>Status:</b> <span>Designer Collection</span></span></p>
              <p><span><b className={styles.box}>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
              <div className={styles.horizontalDivider}></div>
            </div>
            <div id={styles.divider}></div>
            <div id={styles.rightSideContainer}>    
              <div id={styles.largeImageContainer}>
                <ImageGallery imageNames={[image]}/>
              </div>
              <SourceMaterialView/>
            </div>
          </div>
        </Paper>
      </div>
    </HeaderToolbar>
  );
}

export default Item;