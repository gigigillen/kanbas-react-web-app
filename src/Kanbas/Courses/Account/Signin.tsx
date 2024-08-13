import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signin() {
    const [error, setError] = useState("");

    //state variable captures username and password
    const [credentials, setCredentials] = useState<any>({});

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const signin = async () => {
      try {
        //uses client to post credentials so we can check them in the server side
        const currentUser = await client.signin(credentials);
        dispatch(setCurrentUser(currentUser));
        //just navigating to profile (no error handling yet)
        navigate("/Kanbas/Account/Profile");
      } catch (err: any) {
        setError(err.response.data.message);
      }
    };
  



    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>

            {/* display error */}
            {error && <div className="wd-error alert alert-danger">{error}</div>}

            {/* username and password input fields */}
            <input id="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                value={credentials.username} className="form-control mb-2" placeholder="username" />
            <input id="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                value={credentials.password} className="form-control mb-2" placeholder="password" type="password" />

            {/* sign in button */}
            <button id="wd-signin-btn" onClick={signin} className="btn btn-primary w-100"> Sign in </button>
            <br />
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    );
}
