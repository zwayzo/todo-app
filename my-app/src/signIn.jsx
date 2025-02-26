
import { Link } from "react-router-dom"

function SigninForm() {
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
        
      </form>
    )
  }


export default function SignIn(){
    return (
      <div className='square'>
        <div className='title'>Sign in</div>
        <h3>Welcome again CHAMP to your <br />favorite exercise app</h3>
        <SigninForm />
        <button  className='signinButton' variant="contained">SIGN IN</button>
        <h2 className='noPass'>Forgot you password?</h2>
        <h2>
          <span className='half1'>D'ont have an account.</span>{' '}
          <Link className="half2" to="/signUp">Registre</Link>
        </h2>
      </div>
    )
  }