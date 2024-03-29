import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/UseTitle';
const Register = () => {
    const { createUser } = useContext(AuthContext);
    useTitle('Sign Up')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(err => console.error(err));

    }
    return (
        <div className="card md:w-1/2 shadow-2xl bg-base-100 py-16 mx-auto mb-10">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Register" />
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Sign In</Link> </p>
        </div>
    );
};

export default Register;