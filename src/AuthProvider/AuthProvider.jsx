import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[user, setuser] = useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth,provider)
    }
  const userSignUp = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
  }
  const userLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userLogOut =() =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser);
      setuser(currentUser)
      setLoading(false)
    })
    return ()=> unsubscribe()
  },[])

  const updateUserProfile = (name,photo) =>{
    setLoading(true)
    updateProfile(auth.currentUser,{
      
      displayName: name,
      photoURL: photo
    } )
  }
    const AuthInfo = {
        user,
        userSignUp,
        userLogin,
        userLogOut,
        loading,
        updateUserProfile,
        googleLogin
    }
    return <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;