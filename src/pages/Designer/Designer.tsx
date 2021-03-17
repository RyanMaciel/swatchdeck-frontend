import React from 'react';
import Paper from '../../common/Paper';
import HeaderToolbar from '../../common/HeaderToolbar';
import DesignerProfile from './DesignerProfile';
import DesignerItemsView from './DesignerItemsView'

function Designer() {
  return (
    <HeaderToolbar>
      <Paper>
        <DesignerProfile/>
      </Paper>
      <Paper>
        <DesignerItemsView/>
      </Paper>
    </HeaderToolbar>
  );
}

export default Designer;