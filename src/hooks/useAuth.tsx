import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";

const useAuth = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(
        `Error was : ${error}, Error Message : ${errorMessage}, Error Code : ${errorCode}, email : ${email}, credential : ${credential}`
      );
    });
};

export default useAuth
