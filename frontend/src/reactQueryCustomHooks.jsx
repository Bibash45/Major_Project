import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./context/AuthContext";

export const useRegisterUser = ( setSuccessMessage) => {
  const queryClient = useQueryClient();
  const { mutate: createUser } = useMutation({
    mutationFn: async (data) => {
      return await axios.post("http://localhost:5000/api/register", data);
    },
    onSuccess: () => {
      toast.success("Your account has been created");
      setSuccessMessage(true);
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Registration failed.";
      toast.error(errorMessage);
    },
  });

  return { createUser };
};

export const useLoginUser = ( setSuccessMessage) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { mutate: loginUser } = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("http://localhost:5000/api/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      const { token, user } = data;
      login(token, user);
      toast.success("Login Successful");
      setSuccessMessage("Login successful");
      navigate("/");
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Login failed.";
      toast.error(errorMessage);
    },
  });

  return { loginUser };
};

export const useVolunteer = ( ) => {
  const queryClient = useQueryClient();

  const { mutate: createVolunteer } = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("http://localhost:5000/api/volunteer", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Submitted successfull");
      
    },
    onError: (error) => {
      // const errorMessage = error.response?.data?.message || "Login failed.";
      toast.error("Submission failed");
    },
  });

  return { createVolunteer };
};
