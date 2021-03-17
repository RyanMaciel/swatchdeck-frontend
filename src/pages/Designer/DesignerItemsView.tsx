import React from 'react';
import img from '../Item/image1.png';
import DesignerItemThumb from '../../common/DesignerItemThumb';
import styles from './DesignerItemsView.module.css';

function DesignerItemsView() {

  let thumbData:[any, string][] = [[img, 'yes'], [img, 'something else'], [img, 'the final thing'],
  [img, 'jk this is the final thing'], [img, ' thing']] 
  return (
    <div id={styles.container}>
        {
          thumbData.map((item)=>{
            return (
              <div className={styles.item}>
                <DesignerItemThumb img={item[0]} title={item[1]}/>
              </div>
            )
          })
        }
    </div>
  );
}

export default DesignerItemsView;