import React, { Suspense } from 'react';
import {
  useAuth,
  useUser
} from 'reactfire';
import 'firebase/auth';
import Paper from '../../common/Paper';
import HeaderToolbar from '../../common/HeaderToolbar';


function LoginContents() {
  const userInitialVal = 'not-yet-found';
  const fireAuth = useAuth
  const fireAuthCalled = fireAuth()
  const { data: user } = useUser(fireAuthCalled, {initialData: userInitialVal});

  // If the user isn't our placeholder value (ie. its been fetched) and it's null,
  // Then go log them in.
  if (!(typeof user === 'string' && user === userInitialVal) && !user) {

    // Redirect w/ google oath.
    var provider = new fireAuth.GoogleAuthProvider;
    fireAuthCalled
    .getRedirectResult()
    .then((result) => {

      // If there was no redirect operation called.
      if (result.user == null) {
        fireAuthCalled.signInWithRedirect(provider).then((result)=>{
          console.log(result);
        }).catch((err)=>{
          console.log(err);
        });
      }
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch((error) => {
      console.log(error)
      debugger;
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }
  console.log(user);
  return (
    <div id='container'>
      <Paper>

      </Paper>
    </div>
  );
}

function Login() {
  return(
    <HeaderToolbar>
      <Suspense fallback={'loading'}>
        <LoginContents/>
      </Suspense>
    </HeaderToolbar>
  )
}
export default Login;