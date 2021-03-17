import React from 'react';
import Paper from '../../common/Paper';
import HeaderToolbar from '../../common/HeaderToolbar';
import DesignerProfile from './DesignerProfile';
import DesignerItemsView from './DesignerItemsView'
import styles from './Designer.module.css';

function Designer() {
  return (
    <HeaderToolbar>
      <div id={styles.outerContainer}>
      <Paper>
        <DesignerProfile/>
      </Paper>
      <div className={styles.marginDivider}></div>
      <Paper>
        <DesignerItemsView/>
      </Paper>
      </div>
    </HeaderToolbar>
  );
}

export default Designer;