import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import log from '../../assets/78126-secure-login.json';
import Lottie from 'lottie-react';
import useTitle from '../../Hooks/UseTitle';

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;

                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error));

    }
    return (
        <div className="w-full my-12">
            <div className="grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/4 ml-4">

                    <Lottie animationData={log} loop={true}></Lottie>

                </div>
                <div className="card flex-shrink-0 md:w-3/4 shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl text-center font-bold">Sign In</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to DocPort? <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;