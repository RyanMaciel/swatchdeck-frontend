import React, { Suspense, useState } from 'react';
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
  console.log(user);
  return (
    <>
      {user &&
        <div id='logout' onClick={clickHandle}>logout</div>
      }
    </>
  )
}

function UserDropdown() {
  const [expanded, setExpanded] = useState(false);
  const expand=()=>{
    setExpanded(!expanded);
  }
  return (
    <div id={styles.dropdownContainer}>
      <div id={styles.userButton} onClick={expand}>
      </div>
      <div className={styles.dropdown} id={expanded ? styles.dropdownExpanded : styles.dropdownClosed}>
        <div className={styles.dropdownEntry}>
          <Suspense fallback={"nothing"}>
            <AuthContents/>
          </Suspense>
        </div>
        <div className={styles.dropdownEntry}>
          Profile
        </div>
        <div className={styles.dropdownEntry}>
          Settings
        </div>
      </div>
    </div>
  )
}

function HeaderToolbar(props: React.PropsWithChildren<any>) {
  return (
    <div id={styles.container}>
        <div id={styles.toolbarContainer}>
            <div>
              <Link to='/feed'>FEED</Link>
            </div>
            <div>
              <UserDropdown/>
            </div>
        </div>
        <div id={styles.pageContent}>
            {props.children}
        </div>
    </div>
  );
}

export default HeaderToolbar;