import { Box, Button } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirected_uri = location.state?.from || "/home";
  const handleSignInGoogle = () => {
    signInGoogle().then(() => history.push(redirected_uri));
  };
  return (
    <Box width="25%" mx="auto">
      <h1>Login With Google</h1>
      <Button onClick={handleSignInGoogle} variant="contained" color="primary">
        Google
      </Button>
    </Box>
  );
};

export default Login;
