import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/Firebase.config";
import axios from 'axios';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
//google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  };
  //email and password
  //sign up
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  // manage user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        axios.post('http://localhost:5000/jwt', {
   email:user.email
  })
  .then(function (response) {
    console.log(response);
    localStorage.setItem('token', response.data.token)
  })
  
        
      } else {
        localStorage.removeItem('token')
      }
      setLoading(false)
    });
  }, []);

  //logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  };

  //update profile
   const updateUser = (name,photo) => {
 return   updateProfile(auth.currentUser, {
  displayName: name, photoURL: photo
})
 }

  const values = {
    googleSignIn,
    signUp,
    login,
    user,
    logOut,
    updateUser
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;