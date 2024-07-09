import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [showPwd, setShowpwd] = useState(false);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setRegisterError('');

        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleFormSubmit} action="">
                <input type="email" name="email" /><br /><br />
                <input type={showPwd ? "text" : "password"} name="password" />
                <span onClick={() => setShowpwd(!showPwd)} className="absolute top-1/1">
                    {
                        showPwd ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span><br /><br />
                <input type="submit" value="Register" />
            </form>
            {
                registerError && <p>{registerError}</p>
            }
        </div>
    );
};

export default Register;