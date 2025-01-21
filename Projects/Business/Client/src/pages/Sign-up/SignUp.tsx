import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UserWithoutId, User } from "../../types/userType.tsx";
import { SignUpApi } from "../../services/userService.tsx";

const SignUp: React.FC<{
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLogIn, setIsLogIn }) => {
  const [name, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plan, setPlan] = useState<"Standard" | "Gold" | "Platinum">(
    "Standard"
  );
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser: UserWithoutId) => SignUpApi(newUser),
  });

  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlan(event.target.value as "Standard" | "Gold" | "Platinum");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = { name, email, password, plan };
    try {
      await mutation.mutateAsync(newUser);
      setIsLogIn(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-gradient bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          Sign Up for an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="plan" className="block text-sm font-medium mb-2">
              Select Plan:
            </label>
            <select
              id="plan"
              value={plan}
              onChange={handlePlanChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="Standard">Standard</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 rounded-lg shadow-md transition-all duration-300"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Signing Up..." : "Sign Up"}
          </button>
          {mutation.isError && (
            <div className="text-red-500 text-sm text-center mt-2">
              {mutation.error instanceof Error
                ? "This email is already in use. Please try a different one."
                : "Something went wrong!"}
            </div>
          )}
        </form>
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-400 hover:underline hover:text-orange-300"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
