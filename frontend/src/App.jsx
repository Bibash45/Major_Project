import React, { useContext } from "react";
import AuthProvider from "./context/AuthContext.jsx";
import MyRoute from "./MyRoute.jsx";

const App = () => {
  return (
    <AuthProvider>
      <MyRoute />
    </AuthProvider>
  );
};

export default App;
