import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {userLogin, googleLogin} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()


    // Google login
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : "/");
        })
        .catch(err =>{
            console.log(err);
        })
      }
   

    //Login using email
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


    //   if password and email match it'll show a alert
        if (!email, !password) {
            Swal.fire("Email or password does not match match");
        } else {

            // user will be loggedIn
          userLogin(email, password)
            .then(result => {
              console.log(result.user);

            //   after login it'll redirect
              navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
              console.log(err);
            });
        }
      };
     
    return (
        <div>

        <div className="hero h-auto">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-60 md:w-full max-w-sm shadow-2xl bg-base-100">
                    <form 
                    onSubmit={handleLogin} 
                    
                    className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div><h2>New to this Website? please <Link className="font-bold text-blue-600" to="/signup">Signup</Link> </h2></div>
                        <div className="form-control mt-6">
                        <button type="submit" className="px-8 font-semibold text-black  bg-gray-500 p-2 rounded-lg">Login</button>
                            
                        </div>
                        <button className="btn-ghost border-green-700 gap-2 py-2 flex items-center justify-center rounded-xl" onClick={handleGoogleLogin} > 
                        <span className="text-xl"></span>Google Login</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;