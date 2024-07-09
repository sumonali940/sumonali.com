import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { user, signInUser, handleGoogleSignIn, handleGithubSignIn, handleSignOut, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pwd = e.target.password.value;

        signInUser(email, pwd)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>LogOut {user?.displayName}</button>
                    :
                    <div>
                        <button className="mr-3" onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>
                    </div>
            }
            {
                user && <div>
                    <h3>User: {user?.displayName}</h3>
                    <p>Email: {user.email}</p>
                    {
                        user.photoURL ? <><img src={user.photoURL} alt="Not found the url" /></>
                            : <></>
                    }

                </div>
            }

            {
                user ? <></>
                    :
                    <>
                        <form onSubmit={handleLogin} action="">
                            <input type="text" name="email" /><br />
                            <input type="password" name="password" /><br />
                            <input type="submit" value="Login" />
                        </form>
                    </>
            }
        </div>
    );
};


export default Login;