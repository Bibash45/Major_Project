import React, { useContext } from "react";
import Nav from "../components/Nav";
import LoginCom from "../components/LoginCom";
import SignComp from "../components/SignComp";
import { myLoginContext } from "../context/loginContext";
import { Helmet } from "react-helmet";
const Login = () => {
  const { isLogin, isSignUp, setSignUp } = useContext(myLoginContext);
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Login - DonateFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="d-flex flex-column justify-content-between">
        {isSignUp ? <SignComp /> : <LoginCom />}
        {/* {isLogin ? <LoginCom />: <SignComp />} */}
      </div>
    </>
  );
};

export default Login;
