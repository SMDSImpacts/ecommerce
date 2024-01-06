import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from './FirebaseConfig'

const HandleGoogleSignIn = async() => {
    const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user); // Sign-in user object
  } catch (error) {
    console.error(error)
  }
  
};

export default HandleGoogleSignIn;
