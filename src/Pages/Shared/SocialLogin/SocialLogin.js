import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
            .then(result =>{
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p><small>Social Login</small></p>
            <p>
                <Button onClick={handleGoogleSignIn} variant="success"><FaGoogle></FaGoogle> Google</Button>{' '}
            </p>
        </div>
    );
};

export default SocialLogin;