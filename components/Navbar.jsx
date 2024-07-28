
"use client";

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { PiUserThin } from "react-icons/pi";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FaPhoneAlt } from "react-icons/fa";


const Index = () => {

 const { data: session } = useSession();

   let user = (session?.user)
   console.log('userrrr   ',  user)

   const handleNavbar = () => {
    const navbarToggler = document.getElementById('navbarNavDropdown');
    navbarToggler.classList.remove('show');
  };





  return (
    <>
      
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary " id='topNav'>

      <div className="container-fluid mx-3">
       
        <Link href={'/'} 
              onClick={handleNavbar}
              className="navbar-brand">
          <h3>Peter Sivak</h3>
        </Link>


 
        
         <div>
         {/*  <div className="nav-item btn btn-light dropdown" id='menu'>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id='a-link'
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
                {
                  user ? (
                    <>
                     <PiUserThin />
                    </>
                  ) : (
                    <>
                      Menu
                    </>
                  )
                }
              </a>

               {
                user === null || user === undefined ? (
                  <>
                    <ul className="dropdown-menu" id='menu-ul'>
                      <li  onClick={handleNavbar}>
                        <Link href={'/user/Login'} className="dropdown-item">
                          Log In
                        </Link>
                      </li>
                      <li onClick={handleNavbar}>
                        <Link href={'/user/Register'} className="dropdown-item">
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  <> 
                      <ul className="dropdown-menu" id='menu-ul'>
                        <li onClick={handleNavbar}>
                          <Link href={'/private/user/profile'} className="dropdown-item">
                            Profile
                          </Link>
                        </li>

                        {
                          user?.isAdmin === true && (
                            <>
                            <li onClick={handleNavbar}>
                              <Link href={'/private/admin/admin'} className="dropdown-item">
                                Admin Data
                              </Link>
                            </li>
                            <li onClick={handleNavbar}>
                              <Link href={'/private/admin/users'} className="dropdown-item">
                                Users
                              </Link>
                            </li>
                            <li onClick={handleNavbar}>
                              <Link href={'/private/admin/treningy'} className="dropdown-item">
                                Training
                              </Link>
                            </li>
                            <li onClick={handleNavbar}>
                              <Link href={'/private/admin/system/system'} className="dropdown-item">
                                System
                              </Link>
                            </li>
                            </>
                          )
                        }

                      
                        <li onClick={() => signOut()}>
                          <Link href={'/'}       className="dropdown-item">
                            Log Out
                          </Link>
                        </li>
                      </ul>
                   </>
                )
              } 
          </div> */}
 
           <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaPhoneAlt className='fs-5'/>
          </a>

         </div>
       
        
       </div>
      </nav>


      <style jsx>{`

     #theme.dropdown-menu {
        width: 60px !important;
        min-width: 60px !important;
      }

      #theme .dropdown-item {
        width: 100% !important;
        padding: 5px !important; 
        text-align: center;
      }

      #theme .dropdown-item svg {
        width: 100%; 
      }


      
      .hover-sublink:hover {
        position: relative;
        padding: 0 0 0 15px;
        transition: padding 0.5s ease;
      }

      #menu-ul {
        position: absolute;
        left: -80px;
        top: 40px;
      }


      #mode {
        position: absolute;
        left: -80px;
        top: 40px;
      }
 



      `}</style>

    </>
  );
};

export default Index; 