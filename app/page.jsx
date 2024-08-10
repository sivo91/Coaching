/* eslint-disable @next/next/no-img-element */

import React from 'react';

export default async function Home() {
  const data = [
    { id: 1, url: '/imgs/abbdot2.png' },
    { id: 3, url: '/imgs/aka.png' },
    { id: 4, url: '/imgs/bri.jpg' },
    { id: 5, url: '/imgs/headUp.jpg' },
    { id: 6, url: '/imgs/sfsf.jpg' },
    { id: 7, url: '/imgs/echl.jpg' },
    { id: 8, url: '/imgs/presure.jpg' },
    { id: 9, url: '/imgs/sha1.jpg' },
    { id: 10, url: '/imgs/sha3.jpg' },
    { id: 11, url: '/imgs/skate.jpg' },
    { id: 12, url: '/imgs/stock.jpg' },
    { id: 13, url: '/imgs/STOCKTON.jpg' },
    { id: 14, url: '/imgs/sha4.jpg' },
    { id: 15, url: '/imgs/all.jpg' },
  ];


  // ok
  return (
    <main className="my-5">
      <h3 className="text-center my-3">Hi & Welcome,</h3>
      <div className="container-fluid overflow-hidden">

        {/* Introduction */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
            <p>My name is Peter Sivak and my journey began in the picturesque town of Liptovsky Mikulas, nestled at the foothills of the highest Slovakian mountains. This is where I first stepped onto the ice at the young age of six. Although I played only 36 games for my hometown club during my teenage years, these early experiences laid the foundation for my passion for hockey.</p>

            <div className="alert alert-success text-center" role="alert" style={{border: '1px solid green'}}>
              <strong>I will be working with your son as if I were preparing myself for the next season.</strong>
            </div>

            <p>Throughout my career, I&apos;ve played for many teams and achieved significant successes.</p>

            <p>At 18, I joined the army club HK Dukla Trencin, where I spent six years and won a championship title, a silver medal, and a bronze medal. This period was an invaluable learning experience, allowing me to meet NHL stars (Marian Hossa, Marian Gaborik, Zdeno Chara, Robert Svehla, Tomas Kopecky…) and see firsthand the dedication required for success.</p>

            <div className="text-center">
              <img src="/imgs/tncup.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
        </div>

        {/* Medals */}
        <div className="row d-flex justify-content-center my-3">
          <div className="col-3 col-md-1">
            <div>
              <img src="/imgs/gold.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
          <div className="col-3 col-md-1">
            <div>
              <img src="/imgs/brondz.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
          <div className="col-3 col-md-1">
            <div>
              <img src="/imgs/silver.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
            <p>My journey continued at MsHK Zilina in Slovakia, where I spent two years and had the honor of representing Slovakia. I then moved to PSG Zlin in the Czech Republic, where I spent another two years.</p>

            <p>Returning to MsHK Zilina in Slovakia, I scored one of the fastest goals in ice hockey history, just 4.08 seconds into the game.</p>

            <div className="text-center">
              <img src="/imgs/record.jpg" className="img-fluid" alt="tncup" />
            </div>

            {/* Video */}
            <div className="text-center">
              <iframe
                width="380"
                height="315"
                src="https://www.youtube.com/embed/daZ7ng1Gdx4?si=sipmsgb0OBDkbNyt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <p>My career later expanded to the USA, where I became the first player of the San Francisco Bulls, a new brand in the market, and the face of their promotional activities. During this time, I earned an invitation to the AHL&apos;s San Jose Barracuda and experienced the best season of my career with the Alaska Aces in Anchorage. There, I won the Kelly Cup and received numerous individual awards, including:</p>

            <ul>
              <li>ECHL Performer of the Year (+49)</li>
              <li>ECHL First All-Star Team</li>
              <li>Sportsmanship Award (only 10 PIM in a single season).</li>
            </ul>
          </div>
        </div>

        {/* Slovakian Sniper */}
        <div className="row d-flex justify-content-center my-5">
          <div className="col-11 col-md-6 d-flex flex-wrap">
            <div className="col-12 col-md-6">
              <div className="text-center">
                <p><strong>Slovakian Sniper 🏒🥅</strong></p>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/6Poo1KOjKKs?si=ffC1cumzANK_jZrG"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="text-center">
                <img src="/imgs/sha2.png" className="img-fluid" alt="tncup" />
              </div>
            </div>
          </div>
        </div>

        {/* Alaska Cup */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
            <div className="text-center">
              <img src="/imgs/akcup.png" className="img-fluid" alt="tncup" />
            </div>
          </div>
        </div>

        {/* Alaska Awards */}
        <div className="row d-flex justify-content-center my-3">
          <div className="col-3 col-md-1">
            <div>
              <img src="/imgs/akk1.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
          <div className="col-3 col-md-1">
            <div>
              <img src="/imgs/akk2.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
          <div className="col-3 col-md-1">
            <div>
              <img src="/imgs/akk3.jpg" className="img-fluid" alt="tncup" />
            </div>
          </div>
        </div>

        {/* Rest of Career */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
            <p>I spent the next five years in the ECHL, playing for three other AHL teams. During this time, I was again awarded the ECHL All-Star Game and ECHL Plus Performer of the Month (January).</p>

            <div className="text-center">
              <img src="/imgs/total.jpg" className="img-fluid" alt="tncup" />
            </div>

            <p>Overall, I played 1,077 professional games and accumulated 639 points. I was the top scorer on my team 4 times and finished 5 seasons with the most points among my teammates. In my last year in the ECHL, I also served as a player-assistant coach in Tulsa Oilers.</p>

            <p>Despite many successes, a shoulder injury ended my active hockey career in the 2018/2019 season. This turning point led me to invest in academia, studying information technology with a focus on Full-Stack Web Development.</p>

            <p>My goal now is to inspire and educate each of you by sharing the experiences and knowledge I&apos;ve gained throughout my hockey career. I can&apos;t wait to meet you all on the ice and begin your hockey journey together.</p>

            <div className="alert alert-warning text-center" role="alert" style={{border: '1px solid red'}}>
              <strong>I will ensure your son is in capable hands and guide him along the right path to success. He will be grateful in the future. 🏆 Together, let&apos;s raise a new CHAMPION!</strong>
            </div>
           {/*  <h2 className="text-center my-5">Peter: 707 770 6743</h2> */}
          </div>
        </div>

        {/* Images */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-6 text-center">
            {data.map(item => (
              <img key={item.id} src={item.url} className="img-fluid m-1" alt="tncup" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
