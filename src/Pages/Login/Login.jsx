import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })

        
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-20">
          <img src={loginimg} alt="" />

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
          onSubmit={handleLogin}
           className="card-body">
          <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input type="submit" name="" id="" value="Login" className='btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-white
                 hover:text-[#FF3811] hover:font-bold hover:border-[#FF3811]' />
            </div>
          </form>
          <p className='my-4 text-center'>New to Car Doctors <Link className='text-[#FF3811] font-bold' to="/signup">Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
