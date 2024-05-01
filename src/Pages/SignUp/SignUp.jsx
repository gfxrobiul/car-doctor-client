import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
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
          onSubmit={handleRegister}
           className="card-body">
          <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name='name'
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Your Email"
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
                placeholder="Your Password"
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
                <input type="submit" name="" id="" value="Sign Up" className='btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-white
                 hover:text-[#FF3811] hover:font-bold hover:border-[#FF3811]' />
            </div>
          </form>
          <p className='my-4 text-center'>Already have an account? <Link className='text-[#FF3811] 
          font-bold' to="/login">Sign In</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;