import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();

const AuthPorvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(false)

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>  {

    }


    const logOut = () => {
        return signOut(auth)
    }




  const authInfo = {
    user,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
