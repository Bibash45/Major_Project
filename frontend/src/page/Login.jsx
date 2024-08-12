import React, { useContext } from "react";
import Nav from "../components/Nav";
import LoginCom from "../components/LoginCom";
import SignComp from "../components/SignComp";
import { myLoginContext } from "../context/loginContext";
const Login = () => {
  const { isLogin, isSignUp, setSignUp } = useContext(myLoginContext);
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        {isSignUp ? <SignComp /> : <LoginCom />}
        {/* {isLogin ? <LoginCom />: <SignComp />} */}
      </div>
    </>
  );
};

export default Login;
