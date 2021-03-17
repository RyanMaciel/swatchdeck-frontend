import React from 'react';
import './Paper.css';
function Paper(props: React.PropsWithChildren<any>) {
  return (
    <div id='paper'>
        {props.children}
    </div>
  );
}

export default Paper;
