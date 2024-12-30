import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/userService.tsx";
import { FiMail, FiLock } from "react-icons/fi";

interface LogInProps {
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LogInProps> = ({ isLogIn, setIsLogIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (userCredentials: { email: string; password: string }) =>
      loginApi(userCredentials),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userCredentials = { email, password };

    try {
      await mutation.mutateAsync(userCredentials);
      setIsLogIn(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Log In to Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address:
            </label>
            <div className="flex items-center bg-gray-700 rounded-md">
              <FiMail className="text-gray-400 ml-3" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password:
            </label>
            <div className="flex items-center bg-gray-700 rounded-md">
              <FiLock className="text-gray-400 ml-3" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 rounded-lg shadow-md transition-all duration-300"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Logging In..." : "Log In"}
          </button>
          {mutation.isError && (
            <div className="text-red-500 text-sm text-center mt-2">
              {mutation.error instanceof Error
                ? "Error: Incorrect email or password. Please try again."
                : "Something went wrong!"}
            </div>
          )}
        </form>
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
