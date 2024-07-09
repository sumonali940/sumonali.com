import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGithubSignIn = async () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                console.log("Login State Here", currentUser);
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const handleSignOut = async () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(console.error)
            .finally(() => {
                setLoading(false);
            });
    };

    const logOut = async () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const authInfo = { user, createUser, signInUser, handleGoogleSignIn, handleGithubSignIn, handleSignOut, loading, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
