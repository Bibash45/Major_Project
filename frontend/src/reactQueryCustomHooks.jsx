import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./context/AuthContext";
import { authenticate } from "./help/helpers";
export const useRegisterUser = (setSuccessMessage) => {
  const queryClient = useQueryClient();
  const { mutate: createUser } = useMutation({
    mutationFn: async (data) => {
      return await axios.post("http://localhost:5000/api/register", data);
    },
    onSuccess: (response) => {
      toast.success(response.data.message);
      setSuccessMessage(true);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Registration failed.";
      toast.error(errorMessage);
    },
  });

  return { createUser };
};

export const useLoginUser = (setSuccessMessage) => {
  const navigate = useNavigate();
  // const { login } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { mutate: loginUser } = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );
      authenticate(response, () => {
        console.log(response.data.user.name);
      });
      return response;
    },
    onSuccess: (response) => {
      authenticate(response, () => {
        toast.success("Login Successful");
        setSuccessMessage("Login successful");
        navigate("/");
      });
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Login failed.";
      toast.error(errorMessage);
    },
  });

  return { loginUser };
};

export const useVolunteer = () => {
  const queryClient = useQueryClient();

  const { mutate: createVolunteer } = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:5000/api/volunteer",
        data
      );
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
