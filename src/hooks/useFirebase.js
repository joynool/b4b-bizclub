import { useEffect, useState } from "react";
import initializeAuthentication from "./../Pages/Authentication/Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

/*------------------------------------------------------------------------
Implement custom hook as useFirebase() to pass all firebase functionality
--------------------------------------------------------------------------*/
initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const loginUsingGoogle = (location, navigate) =>
    {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                setAuthError('');
                //const user = result.user;
                //saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => { setAuthError(error.message) })
            .finally(() => setIsLoading(false));
    };

    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user);
                //saveUser(user.email, user.displayName);
            }
            else {
                setUser({});
            };
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // filter admin user from database
    /* useEffect(() =>
    {
        fetch(`https://guarded-gorge-39504.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]); */

    const logOut = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    // Save user to database for admin power
    /* const saveUser = (email, displayName) =>
    {
        const user = { email, displayName };
        fetch('https://guarded-gorge-39504.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }; */

    return { user, admin, setAdmin, isLoading, setIsLoading, loginUsingGoogle, logOut, authError, setAuthError };
};

export default useFirebase;