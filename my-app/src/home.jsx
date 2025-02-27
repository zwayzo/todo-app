import { useState } from "react"; // Import useState for state management
import { Link, useNavigate } from "react-router-dom"; // Import navigation tools


export default function Home() {
    try {
        const state = fetch("http://localhost:8000/api/getState/");
        console.log(state);
      }
      catch (err){
        console.log("error");
      }
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlesignout = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch("http://localhost:8000/api/signout/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            console.log(response);
            if (response.ok)
                navigate("/signin");
            else
                setError(data.error || "Signout failed");

        }
        catch (err){
            setError("signout failed");
        }

    }
    return(
        <>
            <button className="signinButton" onClick={handlesignout}>Log out</button>
            <h1>welcome to home</h1>
        </>
    )
}