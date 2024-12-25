import { User } from "../types/userType.tsx";
import api from "./API.tsx";

export const SignUpApi = async (newUser: User) => {
  try {
    console.log(newUser);

    const response = await api.post("/user/signup", newUser);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error signing up: " +
        (error instanceof Error ? error.message : "Unknown error")
    );
  }
};

export const loginApi = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    console.log(credentials);

    const response = await api.post("/user/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error logging in: " +
        (error instanceof Error ? error.message : "Unknown error")
    );
  }
};
