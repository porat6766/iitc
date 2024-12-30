import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UserWithoutId } from "../../types/userType.tsx";
import { SignUpApi } from "../../services/userService.tsx";

interface SignUpProps {
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ isLogIn, setIsLogIn }) => {
  const [name, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plan, setPlan] = useState<"Standard" | "Gold" | "Platinum">(
    "Standard"
  );

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser: any) => SignUpApi(newUser),
  });

  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlan(event.target.value as "Standard" | "Gold" | "Platinum");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: UserWithoutId = {
      name,
      email,
      password,
      plan,
    };

    try {
      await mutation.mutateAsync(newUser);
      console.log("User signed up successfully");
      setIsLogIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="username" className="block text-sm font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="plan" className="block text-sm font-medium">
              Select Plan:
            </label>
            <select
              id="plan"
              name="plan"
              value={plan}
              onChange={handlePlanChange}
              className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Standard">Standard</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
          ></button>

          {/* Show error message if sign up failed */}
          {mutation.isError && (
            <div className="text-red-500 text-sm">
              {mutation.error instanceof Error
                ? `This email is probably already in use. Try a different one.`
                : "Something went wrong!"}
            </div>
          )}
        </form>

        <p className="text-center text-sm">
          Already have an account?
          <Link
            to="/login"
            className="text-orange-500 hover:underline hover:text-orange-400"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
