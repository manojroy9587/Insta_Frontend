import React from 'react'
import { useState } from "react";

export default function Login_Signup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold mb-4">
          {isLogin ? "Log in to Instagram" : "Sign up for Instagram"}
        </h2>
        <form className="flex flex-col space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border rounded-md w-full"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded-md w-full"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Log in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
