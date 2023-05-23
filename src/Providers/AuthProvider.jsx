import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
 
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    } ,[])

    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        updateUser,
        logOut,
        user, 
        loading
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;