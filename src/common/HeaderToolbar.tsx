import React, { Suspense } from 'react';
import styles from './HeaderToolbar.module.css';
import { Link } from "react-router-dom";
import { useAuth, useUser } from 'reactfire';

// type DesignerItemThumbProps = {
//     img: any,
//     title: string,
//     className?: string
// }

function AuthContents(){
  const {data: user} = useUser()
  const fireAuth = useAuth();
  const clickHandle = ()=>{
    fireAuth.signOut();
  }
  return (
    <>
      {user &&
        <div id='logout' onClick={clickHandle}>logout</div>
      }
    </>
  )
}

function HeaderToolbar(props: React.PropsWithChildren<any>) {
  return (
    <div id={styles.container}>
        <div id={styles.toolbarContainer}>
            <Link to='/feed'>FEED</Link>
            <Suspense fallback={"nothing"}>
              <AuthContents/>
            </Suspense>
        </div>
        <div id={styles.pageContent}>
            {props.children}
        </div>
    </div>
  );
}

export default HeaderToolbar;