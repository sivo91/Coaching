/* eslint-disable @next/next/no-img-element */
"use client";



import React, {  useState } from 'react';

//import { userLogOut } from '@/reduxFile/userSlice';
import Link from 'next/link';
import axios from 'axios';
import { PiUserThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiLogIn } from "react-icons/fi";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";




let balance_drills = 5
let band_drills = 9
let bike_drills = 9
let bosu = 5
let core = 44
let fit_ball = 29
let rope = 5
let jumps = 19
let med_ball = 30
let legs = 31






const data = [
  {
    title: "About Me",
    subtitle: [
      { sublink: "My Career", url: "/aboutUs/creator" },
      { sublink: "My Highlights", url: "/aboutUs/highlights" },
     /*  { sublink: "Contributors", url: "/aboutUs/contributors" }, */
    ],
  },
  {
    title: "Game Situations",
    subtitle: [
      { sublink: "R/L Wing", url: "/position/forwards/wingers" },
      { sublink: "Center", url: "/position/center/center" },
      { sublink: "R/L Defenseman", url: "/position/defensman/defensman" },
      { sublink: "General", url: "/position/general/general" },
    ],
  }, 
  {
    title: "Interviews",
    subtitle: [
      { sublink: "Players", url: "/interviews/players/players" },
      { sublink: "Coaches", url: "/interviews/coaches" },
    /*   { sublink: "Agents", url: "/interviews/agents" }, */
    ],
  }, 
 /*  {
    title: "Accessories",
    subtitle: [
      { sublink: "Polar - H10", url: "/interviews/players" },
    ],
  },  */
 /*  {
    title: "Videos",
    subtitle: [
       { sublink: "Game Analysis", url: "/videos/analysis/analysis" },      
      { sublink: "Drills", url: "/videos/drills/drills" },      
    ],
  },   */
  {
    title: "Drills",
    subtitle: [
     /*  { sublink: "Youth", url: "/Drills/youth" }, */
      { sublink: "Images", url: "/Drills/drills" }, 
      { sublink: "Videos", url: "/videos/drills/drills" },
      { sublink: "Drill Builder", url: "/Drills/createDrill" },
      { sublink: "Highlight Drawing", url: "/Drills/videoEdit" },
    ],
  },
   {
    title: "Off-Ice",
    subtitle: [
      { sublink: "U14 | Off-Ice", url: "/programs/U14" }, 
    ],
  },  
   {
    title: "Coaches",
    subtitle: [
      { sublink: "Coach Game Card", url: "/Coaches/gameCard/gameCard" }, 
      { sublink: "Practice Plan", url: "/Coaches/hockeyPlan/hockeyPlan" }, 
      { sublink: "Weight Loss Tracker", url: "/Coaches/weightLoss/weightLoss" }, 
     /*  { sublink: "data", url: "/cards/data" },  */
     /*  { sublink: "Line Up", url: "/Coaches/lineUp/lineUp" },  */
    ],
  },  
   /* {
    title: "Traiining Plans",
    subtitle: [
      { sublink: "U10 Session  1", url: "#" }, 
      { sublink: "U10 Session  2", url: "#" }, 
      { sublink: "U10 Session  3", url: "#" }, 
      { sublink: "--------------", url: "#" }, 
      { sublink: "U12 Session  1", url: "#" }, 
      { sublink: "U12 Session  2", url: "#" }, 
      { sublink: "U12 Session  3", url: "#" }, 
      { sublink: "--------------", url: "#" },
      { sublink: "U14 Session  1", url: "#" }, 
      { sublink: "U14 Session  2", url: "#" }, 
      { sublink: "U14 Session  3", url: "#" }, 
      { sublink: "--------------", url: "#" },
      { sublink: "U16 Session  1", url: "#" }, 
      { sublink: "U16 Session  2", url: "#" }, 
      { sublink: "U16 Session  3", url: "#" }, 
    ],
  },   */
  {
    title: "Workout",
    subtitle: [
      { sublink: `Balance Board [${balance_drills}]`, url: "/workZone/balanceBoard" },
      { sublink: `Bands [${band_drills}]`, url: "/workZone/Bands" },
      { sublink: `Bicycle [${bike_drills}]`, url: "/workZone/Bike" },
      { sublink: `Bosu Ball [${bosu}]`, url: "/workZone/bosu" },
      { sublink: `Core [${core}]`, url: "/workZone/core" },
      { sublink: `Fit Ball [${fit_ball}]`, url: "/workZone/FitBall" },
      { sublink: `Jump Rope [${rope}]`, url: "/workZone/JumpRope" },
      { sublink: `Jumps [${jumps}]`, url: "/workZone/Jumps" },
      { sublink: `Med Ball [${med_ball}]`, url: "/workZone/MedBall" },
      { sublink: `Legs [${legs}]`, url: "/workZone/Legs" },
     /*  
      { sublink: "Condition", url: "/membership/membership" },
      { sublink: "Accelaration", url: "/membership/membership" },
      { sublink: "Plyometric Exercises", url: "/membership/membership" }, */
    ],
  },
  {
    title: "Price",
    subtitle: [
      { sublink: "Price", url: "/Price/price" },
    /*   { sublink: "Hockey Cards", url: "/cards/cards" }, */
    ],
  },
  {
    title: "Blog",
    subtitle: [
      { sublink: "Blog", url: "/blog/blog" },
      { sublink: "Nutrition", url: "/programs/nutrition" }, 
      { sublink: "2024 Championship", url: "/Pools/Pool" }, 
    ],
  },
/*   {
    title: "Shop",
    subtitle: [
      { sublink: "Hockey Cards", url: "/futureStars/hoba" },
    ],
  },  */
  {
    title: "Contact",
    subtitle: [
      { sublink: "Contact", url: "/contact/contact" },
      { sublink: "Quizes", url: "/contact/quizes" },
      { sublink: "Comments", url: "/contact/questions" },
    ],
  },
  
  
];




const Navbar = () => {

   const { data: session } = useSession();

   let user = (session?.user)
   console.log(user)

  //const { user } = useSelector((state) => state.userAuth)

  const [activeTitle, setActiveTitle] = useState(null);

  const toggleActiveTitle = (title) => {
    // Toggle between active and null state to allow collapsing
    setActiveTitle(activeTitle === title ? null : title);
  };

//const dispatch = useDispatch()


 // close navbar ul
const handleNavbar = () => {
   const navbarToggler = document.getElementById('navbarNavDropdown')
   navbarToggler.className = 'collapse navbar-collapse'
 }




  return (
    <>
      
      {/* desktop */}
      <nav className="navbar navbar-expand-lg bg-body-light border vstack mx-auto shadow-sm border-bottom " id='desktop'>

        <div className="collapse navbar-collapse justify-content-center"
             id="navbarNavDropdown">

          <ul className="navbar-nav">


           {data.map((link, index) => (
              <li
                className="nav-item dropdown shadow-none"
                id='nav-link-hover'
                key={index} >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {link.title}
                </a>
                <ul className="dropdown-menu" style={{width: '200px'}}>
                  {link.subtitle.map((item, subIndex) => (
                    <li key={subIndex} onClick={handleNavbar}>
                      <Link className="dropdown-item" href={item.url}>
                        {item.sublink}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))} 
  
          </ul>

         </div>
      </nav>


      



       {/* mobile */}
      <nav className='d-flex justify-content-between border-bottom pb-3' id='telefony'>

      {/* left side ***************************/}
      <button className="btn btn-light rounded-1 ms-3 mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <div className="navBox">
           
           <RxHamburgerMenu/>
        </div>
      </button>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title font" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          </button>
        </div>
        <div className="offcanvas-body">
          

          {data.map((link, index) => (
                <div key={index} className='m-0'>
            
                  <p
                    className="btn btn-light border w-100"
                    onClick={() => toggleActiveTitle(link.title)}
                    aria-expanded={activeTitle === link.title}
                  >
                    {link.title}
                  </p>

                  {activeTitle === link.title && (
                    <div className="collapse show mb-2">
                      <div className="card card-body" data-bs-dismiss="offcanvas">
                        {link.subtitle.map((sub, subIndex) => (
                          <div key={subIndex} className="my-1  hover-sublink">
                            <Link href={sub.url}
                                  style={{textDecoration: 'none'}} 
                                  className='text-dark'
                              >
                              {sub.sublink}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
     
        </div>
      </div>


      <div>
          <Link href={'/'}
                style={{textDecoration: 'none', color: 'black'}}>
            <img src="/l.png" className='mt-3' width={'100px'} alt="logo" />
          </Link> 
      </div>
   

      {/* right side **********************************/}

      <div>
      
      <button className="btn btn-light rounded-1 mt-3 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          
           {
                  user ? (
                    <>
                     <PiUserThin />
                    </>
                  ) : (
                    <>
                      <FiLogIn />
                    </>
                  )
                }
        </button>
      </div>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              {
                  user ? (
                    <>
                    <p>Hi, {user.name}</p>
                    </>
                  ) : (
                    <>
                     <p> Log In / Sign Up</p>
                    </>
                  )
                }
            </h5>
          </div>
          <div className="offcanvas-body">
           {
                user === null ? (
                  <>
                     <Link href='/login' 
                           className='btn btn-light w-100 border'
                           style={{ textDecoration: 'none' }}>
                        <p 
                          className='m-0'
                          data-bs-dismiss="offcanvas" >
                            Log In
                        </p>
                      </Link>

                     <Link href='/register' 
                           className='btn btn-light w-100 mt-2 border'
                           style={{ textDecoration: 'none' }}>
                        <p 
                          className='m-0'
                          data-bs-dismiss="offcanvas" >
                            Sign Up
                        </p>
                      </Link>
                  </>
                ) : (
                  <> 
                     <Link href='/private/user/profile' 
                           className='btn btn-light w-100 mt-2 border'
                           style={{ textDecoration: 'none' }}>
                        <p 
                          className='m-0'
                          data-bs-dismiss="offcanvas" >
                            Profile
                        </p>
                      </Link>

                       {
                          user?.isAdmin === true && (
                            <>
                              <Link href='/private/admin/admin' 
                                className='btn btn-light w-100 mt-2 border'
                                style={{ textDecoration: 'none' }}>
                                <p 
                                  className='m-0'
                                  data-bs-dismiss="offcanvas" >
                                    Admin
                                </p>
                              </Link>
                               <Link href='/private/admin/users' 
                                className='btn btn-light w-100 mt-2 border'
                                style={{ textDecoration: 'none' }}>
                                <p 
                                  className='m-0'
                                  data-bs-dismiss="offcanvas" >
                                    Users
                                </p>
                              </Link>
                              <Link href='/private/admin/treningy' 
                                className='btn btn-light w-100 mt-2 border'
                                style={{ textDecoration: 'none' }}>
                                <p 
                                  className='m-0'
                                  data-bs-dismiss="offcanvas" >
                                    Training
                                </p>
                              </Link>
                              <Link href='/private/admin/system/system' 
                                className='btn btn-light w-100 mt-2 border'
                                style={{ textDecoration: 'none' }}>
                                <p 
                                  className='m-0'
                                  data-bs-dismiss="offcanvas" >
                                    System
                                </p>
                              </Link>
                             
                            </>
                          )
                        }

                     <Link href='/signOutPage' 
                           onClick={() => signOut()}
                           className='btn btn-light w-100 mt-2 border'
                           style={{ textDecoration: 'none' }}>
                        <p 
                          className='m-0'
                          data-bs-dismiss="offcanvas" >
                            Sign Out
                        </p>
                      </Link>

                   </>
                )
              } 
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
 

        @media  (max-width: 992px) {
          #desktop {
            display: none;
          }
        }

        @media  (min-width: 992px) {
          #telefony {
            display: none!important;
          }
        }




      `}</style>

    </>
  );
};

export default Navbar;