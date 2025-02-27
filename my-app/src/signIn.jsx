
import { useState } from "react"; // Import useState for state management
import { Link, useNavigate } from "react-router-dom"; // Import navigation tools

function SigninForm({ formData, handleChange }) {
    return (
      <form className='inputForm' onSubmit={(e) => e.preventDefault()}>
        <label className='emailLabel'>
          Username
          <input 
            type="username"
            name='username'
            placeholder='Type your username'
            value={FormData.username}
            onChange={handleChange} 
            required
            />
        </label>

        <label className="emailLabel">
          Password
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            value={formData.password}
            onChange={handleChange} // Update form state
            required
          />
        </label>
        
      </form>
    )
  }


export default function SignIn(){
  

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Reset error messages
  
    try {
      const response = await fetch("http://localhost:8000/api/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
      
      const data = await response.json();
      console.log(response);
      if (response.ok){
        console.log("will check for the sign in front\n");
        try {
          const state = fetch("http://localhost:8000/api/getState/");
          const data = await state.json();
          console.log("-->",state);
        }
        catch (err){
          console.log("error");
        }
        navigate("/home");
      }
      else
        setError(data.error || "Signin failed");
    }
    catch (err){
      setError("Signin failed");
    }
  };
      
    return (
      <div className='square'>
        <div className='title'>Sign in</div>
        <h3>Welcome again CHAMP to your <br />favorite exercise app</h3>
        <SigninForm formData={formData} handleChange={handleChange}/>

        { error && <p className="error">{error}</p> }

        <button  className='signinButton' onClick={handleSubmit}>SIGN IN</button>
        <h2 className='noPass'>Forgot you password?</h2>
        <h2>
          <span className='half1'>D'ont have an account.</span>{' '}
          <Link className="half2" to="/signUp">Registre</Link>
        </h2>
      </div>
    )
  }