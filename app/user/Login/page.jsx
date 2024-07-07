

"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";



const Index = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [process, setProcess] = useState(false)

    const router = useRouter();


   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        alert(error)
        return;
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
       <h3 className="text-center my-5">Log In</h3>
       <form onSubmit={handleSubmit}>
        <div className="mb-3">

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" 
                 className="form-control" 
                 id="email" 
                 value={email}
                 onChange={ e => setEmail(e.target.value)}
                 placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" 
                 className="form-control" 
                 id="password" 
                 value={password}
                 onChange={ e => setPassword(e.target.value)}
                 placeholder="Enter your password" />
        </div>
        <button type="submit" 
                disabled={process}
                className="btn btn-primary w-100 my-3 rounded-1">
          { process ? 'Processing...' : 'Submit' }
        </button>

        <hr />

        <div className='mt-3 d-flex justify-content-between mx-1'>
          <Link href={'/forgotPassword'}
                style={{textDecoration: 'none'}}>
            Forgot Password
          </Link>

          <Link href={'/register'}
                style={{textDecoration: 'none'}}>
            Sign Up
          </Link>
        </div>
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
  )
}

export default Index