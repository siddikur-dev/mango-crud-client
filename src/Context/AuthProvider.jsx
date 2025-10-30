import React from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  // React State Declare For User
  // const [user, setUser] = useState(null);
  //  Loading State Declare
  // const [loading, setLoading] = useState(true);
  // Create User
  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In User
  // const signInUser = (email, password) => {
  //   setLoading(true);
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  //  Sign In With Google
  // const signInWithGoogle = () => {
  //   setLoading(true);
  //   signInWithPopup(auth, googleProvider);
  // };

  // Sign Out User
  // const signOutUser = () => {
  //   setLoading(true);
  //   return signOut(auth);
  // };

  // Delete User From Firebase
  const deletedUser = (user) => {
    return deleteUser(user);
  };

  // Auth State Change Use UseEffect
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  const userInfo = {
    // user,
    // loading,
    createUser,
    deletedUser,
    // signInUser,
    // signInWithGoogle,
    // signOutUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
