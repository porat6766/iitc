import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/userService.tsx";

const Login: React.FC = ({ isLogIn, setIsLogIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (userCredentials: { email: string; password: string }) =>
      loginApi(userCredentials),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    try {
      await mutation.mutateAsync(userCredentials);
      console.log("User logged in successfully");
      setIsLogIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Logging In..." : "Login"}
          </button>

          {mutation.isError && (
            <div className="text-red-500 text-sm">
              {mutation.error instanceof Error
                ? `Error: ${mutation.error.message}`
                : "Something went wrong!"}
            </div>
          )}
        </form>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 hover:underline hover:text-orange-400"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
