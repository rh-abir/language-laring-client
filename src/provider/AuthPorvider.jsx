import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthPorvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(false)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>  {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUSerProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe  = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoding(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



  const authInfo = {
    user,
    createUser ,
    signIn,
    googleSignIn,
    updateUSerProfile,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
