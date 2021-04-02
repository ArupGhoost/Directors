import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
    
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <>
           <div className='home'>
               <img src='https://static.hollywoodreporter.com/sites/default/files/2019/07/zack_snyder_2-getty-h_2019_-928x523.jpg' 
                alt='' class='image1'/>
                <p>Top 3 movies of Jack Snyder</p>
                 </div>
                 <br />
                 <br />
                 

            <div className='movies1'>
                  <div className='mchild1'>
                  <img src='https://resizing.flixster.com/Q3yUH5rCj71Wc2LjYMaEbvSvxGw=/206x305/v2/https://flxt.tmsimg.com/assets/p163191_p_v10_an.jpg' 
                  alt='' className='image2'  data-aos="fade-down"/>
                        <h3 data-aos="fade-left">300(2006)</h3>
                        <div className='para1'>
                         <p>King Leonidas of Sparta</p> 
                         <p>and a force of 300 men fight</p> 
                        <p>the Persians at Thermopylae in 480 B.C</p>
                        </div>               
                  </div>
            </div>

         <br />
         <br />

         <div className='movies2'>
                <div className='mchild2'>
                  <img src='https://images-na.ssl-images-amazon.com/images/I/51OrrZRXTvL._SY445_.jpg' 
                  alt='' className='image3' data-aos="fade-down"/>
                  <h3 data-aos="fade-left">Man Of Steel(2013)</h3>
                  <div className='para2'>
                        <p>Clark learns about the source of his abilities</p> <p>and his real home when he enters a Kryptonian ship in the Artic. However,</p> 
                        <p>an old enemy follows him to Earth</p> 
                        <p>in search of a codex and brings destruction.</p>
                  </div>
                </div>
         </div>
             <br />
             <br />

             <div className='movies3'>
                 <div className='mchild3'>
                  <img src='https://upload.wikimedia.org/wikipedia/en/1/16/Dawn_of_the_Dead_2004_movie.jpg' 
                  alt='' className='image4' data-aos="fade-down"/>
                  <h3 data-aos="fade-left">Dawn Of Dead(2004)</h3>
                  <div className='para3'>
                      <p>Survivors of an epidemic which causes the infected to</p> 
                      <p>turn into flesh-eating zombies take refuge in a shopping mall.</p>
                     <p>In addition to battling the undead,</p> 
                      <p>they also have to tackle problems from within.</p>
                  </div>
                 </div>
             </div>
             <br />
            
        </>
    )
}

export default Home
