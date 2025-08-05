import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signinCallback, getUser } from "../auth/AuthProvider";

import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../store/authSlice";

const Callback = () => {
  const navigate = useNavigate();
  const hasRun = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    async function handleSignin() {
      try {
        console.log("Handling signin callback...");
        const creds = await signinCallback();
        const user = await getUser();
        if (user) {
          localStorage.setItem("auth", JSON.stringify(user)); // keep if you want legacy support
          dispatch(setUser(user)); // update Redux state
          navigate("/home");
        } else {
          dispatch(clearUser());
          navigate("/login");
        }
      } catch (err) {
        console.error("Signin callback error:", err);
        dispatch(clearUser());
        navigate("/login");
      }
    }

    handleSignin();
  }, [navigate, dispatch]);

  return <p>Processing login...</p>;
};

export default Callback;
