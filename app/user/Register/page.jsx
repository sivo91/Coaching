
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    console.log(name, email, password)
    try {
      const res = await axios.post("/api/register", {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else if (res.status === 409) {
        setError("User already exists.");
      } else {
        console.log("User registration failed.");
        setError("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      if (error.response && error.response.status === 405) {
        setError("Method not allowed. Please contact support.");
      } else {
        setError("An error occurred during registration.");
      }
    }
  };

  return (
    
       <>
          <h1 className="text-center">Register</h1>

        <form onSubmit={handleSubmit} >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control " 
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control " 
            placeholder="Email"
          /> 
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control " 
            placeholder="Password"
          />
          <button className="btn btn-primary">
            Register
          </button>

          {error && (
            <div className="text-danger">
              {error}
            </div>
          )}

          <Link className="" href={"/"}>
            Already have an account? <span className="">Login</span>
          </Link>
        </form>

        <style jsx>{`
        form {
          position: relative;
          width : 400px;
          margin: 0 auto 60px;
          border: 1px solid gray;
          padding: 40px;
          border-radius: 7px;
          background-color: white;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
       </>
    
  );
}