import React from 'react';
import Paper from '../../common/Paper';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import HeaderToolbar from '../../common/HeaderToolbar';
import img from '../Item/image1.png';
import styles from './Feed.module.css';

function Designer() {
    let thumbData:[any, string][] = [[img, 'yes'], [img, 'something else'], [img, 'the final thing'],
      [img, 'jk this is the final thing'], [img, ' thing']] 
  return (
    <HeaderToolbar>
      <div id={styles.feedContainer}>
        <Paper style={{margin: 0}}>
          {thumbData.map((item)=>{
            return (
              <div id={styles.feedItemContainer}>
                <DesignerItemThumb img={item[0]} title={item[1]}/>
              </div>
            )
          })}
        </Paper>
      </div>
    </HeaderToolbar>
  );
}

export default Designer;