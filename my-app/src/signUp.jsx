import { useState } from "react"; // Import useState for state management
import { Link, useNavigate } from "react-router-dom"; // Import navigation tools

// SignupForm Component
function SignupForm({ formData, handleChange }) {
  return (
    <form className="inputForm" onSubmit={(e) => e.preventDefault()}>
      {/* Email Input */}
      <label className="emailLabel">
        Username
        <input
          type="username"
          name="username"
          placeholder="Type your username"
          value={formData.username}
          onChange={handleChange} // Update form state
          required
        />
      </label>


      <label className="emailLabel">
        Email
        <input
          type="email"
          name="email"
          placeholder="Type your email"
          value={formData.email}
          onChange={handleChange} // Update form state
          required
        />
      </label>

      {/* Password Input */}
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

      {/* Confirm Password Input */}
      <label className="emailLabel">
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          placeholder="Retype your password"
          value={formData.confirmPassword}
          onChange={handleChange} // Update form state
          required
        />
      </label>
    </form>
  );
}

// Main SignUp Component
export default function SignUp() {
  try {
    const state = fetch("http://localhost:8000/api/getState/");
    console.log(state);
  }
  catch (err){
    console.log("error");
  }
  const [formData, setFormData] = useState({
    email: "",           // Stores the email entered by the user
    username:"",
    password: "",        // Stores the password entered by the user
    confirmPassword: "", // Stores the confirmation password
  });

  const [error, setError] = useState(""); // Stores error messages
  const navigate = useNavigate(); // Hook for navigation

  // Updates form state when user types in fields
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value,
    });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Reset error messages

    // Validate if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // alert("Signup successful! Redirecting...");
        navigate("/signin"); // Redirect to login page
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("Network error, please try again");
    }
  };

  return (
    <div className="signupSquare">
      <div className="title">Sign Up</div>
      <h3>Welcome CHAMP to your <br />favorite exercise app</h3>

      {/* SignupForm Component */}
      <SignupForm formData={formData} handleChange={handleChange} />

      {/* Display error message if there's an error */}
      {error && <p className="error">{error}</p>}

      {/* Sign-Up Button - Now inside the form and linked to handleSubmit */}
      <button className="signinButton" onClick={handleSubmit}>
        SIGN UP
      </button>

      {/* Link to sign-in page */}
      <h2>
        <span className="half1">Already have an account?</span>{" "}
        <Link className="half2" to="/signIn">Login</Link>
      </h2>
    </div>
  );
}
