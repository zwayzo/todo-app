

import { Link } from "react-router-dom"




function SignupForm() {
    return (
      <form className='inputForm'>
        <label className='emailLabel'>
          Email
          <input type="text" name='email' placeholder='Type your email' />
        </label>
        <label className='emailLabel'>
          Password
          <input type="text" name='password' placeholder='Type your password'/>
        </label>
        <label className='emailLabel'>
          Password
          <input type="text" name='password' placeholder='Retype your password'/>
        </label>
        
      </form>
    )
  }


  export default function SignUp(){
    return (
      <div className='signupSquare'>
        <div className='title'>Sign Up</div>
        <h3>Welcome CHAMP to your <br />favorite exercise app</h3>
        <SignupForm />
        <button  className='signinButton' variant="contained">SIGN UP</button>
        {/* <h2 className='noPass'>Forgot you password?</h2> */}
        <h2>
          <span className='half1'>Already have an account.</span>{' '}
          <Link className="half2" to="/signIn">Login</Link>
        </h2>
      </div>
    )
  }