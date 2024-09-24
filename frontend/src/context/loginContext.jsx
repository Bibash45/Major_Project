import React, { createContext, useState } from 'react';


// Create the context
const myLoginContext = createContext();

// Create a provider component
const LoginProvider = ({ children }) => {
  // const [logState, setLogState] = useState(false);
  const [log,setLog] = useState(false)
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setSignUp] = useState(false);

  const value = {
    setLog,
    log,
    isLogin,
    setIsLogin,
    isSignUp,
    setSignUp,
  };

  return (
    <myLoginContext.Provider value={value}>
      {children}
    </myLoginContext.Provider>
  );
};

export { myLoginContext, LoginProvider };