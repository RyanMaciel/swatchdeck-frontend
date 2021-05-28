import React, { Suspense, useState } from 'react';
import styles from './HeaderToolbar.module.css';
import gStyles from './GlobalStyles.module.css';
import { Link } from "react-router-dom";
import { useAuth, useUser } from 'reactfire';


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

type HeaderToolbarProps = {
  showPostButton: boolean,
}
function HeaderToolbar({children, showPostButton=true}:(HeaderToolbarProps | React.PropsWithChildren<any>)) {
  return (
    <div id={styles.container}>
        <div id={styles.toolbarContainer} className={gStyles.header}>
            <div>
              <Link to='/feed'>FEED</Link>
            </div>
            <div id={styles.rightSideContainer}>
              <div id={styles.addPostButton}>
                {showPostButton &&
                  <Link to='/post'>
                    Create Post
                  </Link>
                }
              </div>
              <UserDropdown/>
            </div>
        </div>
        <div id={styles.pageContent} className={gStyles.background}>
            {children}
        </div>
    </div>
  );
}

export default HeaderToolbar;