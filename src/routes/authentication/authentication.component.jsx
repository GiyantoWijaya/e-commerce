// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

// import {
//   // auth,
//   createUserDocumentFromAuth,
//   // signInWithGoogleRedirect,
//   signInWithGooglePopUp,
// } from "../../utils/firebase/firebase.utils";

import "./authentication.styles.scss";

const Authentication = () => {
  //  Sign In With Google Redirect

  // useEffect(() => {
  //   const getResultFromRedirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getResultFromRedirect();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
