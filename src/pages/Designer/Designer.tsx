import React from 'react';
import Paper from '../../common/Paper';
import DesignerProfile from './DesignerProfile';
import DesignerItemsView from './DesignerItemsView'
function Designer() {
  return (
    <>
      <Paper>
        <DesignerProfile/>
      </Paper>
      <Paper>
        <DesignerItemsView/>
      </Paper>
    </>
  );
}

export default Designer;