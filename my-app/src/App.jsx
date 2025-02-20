// import React from "react";

// import { createElement } from "react";
import { Fragment } from 'react'

// function Logo(){
//   return (
//     <img id="logo" src="download.png" alt="logo"/>
//   )
// }

function Header(){
  return (
    <header className='header'>
     
    </header>
  )
}

function MyForm() {
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


function SignIn(){
  return (
    <div className='square'>
      <div className='title'>Sign in</div>
      <h3>Welcome again CHAMP to your <br />favorite exercise app</h3>
      <MyForm />
      <button  className='signinButton' variant="contained">SIGN IN</button>
      <h2 className='noPass'>Forgot you password?</h2>
      <h2>
        <span className='half1'>D'ont have an account.</span>{' '}
        <span className='half2'>Registre</span>
      </h2>
    </div>
  )
}

function SignUp(){
  return (
    <div className='square'>
      <div className='title'>Sign Up</div>
      <h3>Welcome again CHAMP to your <br />favorite exercise app</h3>
      <SignupForm />
      <button  className='signinButton' variant="contained">SIGN UP</button>
      <h2 className='noPass'>Forgot you password?</h2>
      <h2>
        <span className='half1'>D'ont have an account.</span>{' '}
        <span className='half2'>Registre</span>
      </h2>
    </div>
  )
}

export default function Calc() {
  return (
    <Fragment >
      <Header />
      <SignUp />
    </Fragment>


  );
}

// Default export (if needed)
// export function App() {
//   return (
//     <section>
//       <ul>
//         <li>Hello</li>
//         <li>Welcome</li>
//         <li>Hola</li>
//       </ul>
//     </section>
//   );
// }