import './App.css';
import Rating from './Rating';
import {FaRegCalendarAlt, FaHandsHelping} from 'react-icons/fa'
import {TiShoppingCart} from 'react-icons/ti'
import {GiReceiveMoney} from 'react-icons/gi'
import reactDom from 'react-dom';
import {SiGoogleanalytics} from 'react-icons/si'
import partner0 from './images/partners/0.jpg'
import partner1 from './images/partners/1.jpg'
import partner2 from './images/partners/2.jpg'
import partner3 from './images/partners/3.jpg'
import image from './images/farmersectionimage.jpg'
import farmland from './images/farmland.jpg'
import p1 from './images/products/l1.jpg'
import p2 from './images/products/l2.jpg'
import p3 from './images/products/l3.jpg'
import p4 from './images/products/l4.jpg'
import p5 from './images/products/l5.jpg'
import award from './images/award3.jpg'
import farmers from './images/allfarmers.jpeg'
import farmer1 from './images/farmers/13.jpg'
import download from './images/download.png'
import Goals from './Goals';
import Crops from './Crops';
import Header from './Header'
import Footer from './Footer'
import {Achievement, Testimonials} from './Achievement';
import Team from './Team';
import { useState, useEffect } from 'react';

function App() {
  const [style1, setStyle1] = useState({opacity: 0});
  const [style2, setStyle2] = useState({opacity: 0});
  const [style3, setStyle3] = useState({opacity: 0});

  useEffect(() => {
    setTimeout(() => {
      setStyle1({opacity: 1})
    }, 300);
    setTimeout(() => {
      setStyle2({opacity: 1})
    }, 1250);
    setTimeout(() => {
      setStyle3({opacity: 1})
    }, 2500);
  }, [])
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="start">
          <p><span> We</span> <div className="animation1" style={style1}> are</div>
          <div className="animation2" style={style2}> for</div>
          <div className="animation3" style={style3}> farmers</div></p>
        </div>
        <main>
          <div className="info">We are <span className='text1'>revolutionizing farming</span> by building
            <span className='text2'> AI-enabled technologies
            to control production of
            Agricultural Products and
            maintaining their supply
            chain efficiency.</span>
            <img src={download} alt="Download" /></div>
          <div className="banners">
            <div className="banner-left">
                <img src={farmland} alt="image"className='banner1'  />
                <img src={farmland} alt="image" className="banner2"/>
            </div>
            <div className="banner-right">
              <img src={farmland} alt="image"className="banner3" />
              <img src={farmland} alt="image"className="banner4" />
            </div>
            </div>
        </main>
        <div className="about">
          <p>About FarmsBook</p>
          <div>
            <h3>"Empowering Farmers and Buyers for the Better Future"</h3>
            <p><img src={image} alt="Farmer" /> Farmsbook is one of the fastest growing start-ups in Agri Tech sector and one of the very few companies providing
            end-to-end solutions and services to the farming community in India. We are building AI-enabled technologies to
            revolutionize supply chain and production efficiency in farm sector.<br />
            Currently we are operating in Rajasthan with 1 Lakh farmers in our service network and our goal is to bring our
            services to 10 million farmers by 2024.Founded by the alumni from Rajasthan University, Farmsbook is now an
            early stage start-up with growth rate of 3-4x annually. The impact we have created at grass root level over last 2
            years of our operations has been phenomenal, as recognized and felicitated by IIM kashipur , Rafatar Foudation</p>
          </div>
        </div>
        <div id="fbGoals">
          <h2>Why Farmsbook?</h2> 
          <div className="goals">
          <Goals title="Input Planning" image={<FaRegCalendarAlt size={70} />}/>
          <Goals title="Market Linkage" image={<TiShoppingCart size={70} />}/>
          <Goals title="Support & Advisory" image={<FaHandsHelping size={70} />}/>
          <Goals title="Demand Analysis" image={<SiGoogleanalytics size={70} />}/>
          <Goals title="Access of Loans" image={<GiReceiveMoney size={70} />}/>
          </div>
        </div>
        <div id='stats'>
          <h2>Current Status</h2>
          <div className="contain">
            <Rating value={'250+'} props={'FPO'} />
            <Rating value={'100K+'} props={'Farmers'} />
            <Rating value={'5000+'} props={'Organic Farmers'} />
            <Rating value={'20+'} props={'Crops'} />
          </div>
        </div>
        <div id='crops'>
          <h2>Buy Crops</h2>
          <div className="images">
            <Crops image={p1} title={'Olive '} organic={true}/>
            <Crops image={p2} title={'Avacado'} organic={false}/>
            <Crops image={p3} title={'Olive OIl'} organic={true}/>
            <Crops image={p4} title={'Olive OIl'} organic={false}/>
            <Crops image={p5} title={'Olive OIl'} organic={true}/>
            <div className="crop">
              <div className="downloader">
                <p>Download our app for Exclusive Offers</p>
                <img src={download} alt="Download" />
              </div>
            </div>
          </div>
        </div>
        <div id="team">
          <h2>Our Team</h2>
          <div className='candidates'>
            <Team image={farmer1} name={'Our Candidate'} quote={'Here Comes a quote'}/>
            <Team image={farmer1} name={'Our Candidate'} quote={'Here Comes a quote'}/>
            <Team image={farmer1} name={'Our Candidate'} quote={'Here Comes a quote'}/>
          </div>
        </div>
        <div id="farmers">
          <h2>Our Farmers</h2>
          <p>Most of the world's poor, newly 2.5 billion people, live off the land.
          These smallholder farmers survive by farming in small plots of land about the size of a football field.
          Their are 500 million farms that produce more than 70% of the global food supply,
          yet many people living on these farms are themselves struggling to survive.
          Our companies provide smallholder farmers with solutions that improve their productivity,
          by giving them access to markets and ultimately increase their incomes.</p>
          <img src={farmers} alt="" />
        </div>
        <div id="partners">
          <h2>Our Supporting Partners</h2>
          <div className="partner-logo">
            <img src={partner0} alt="image1" />
            <img src={partner1} alt="image2" />
            <img src={partner2} alt="image3" />
            <img src={partner3} alt="image4" />
          </div>
        </div>
      <div id="achievements">
        <h2>Our Achievements</h2>
        <div className="achievement-block">
          <Achievement props={award} title={'The best business Model Award'} date={'23'} month={'June'} year={'2020'} CG={'cm of uttarpradesh'} />
          <Achievement props={award} title={'The best business Model Award'} date={'23'} month={'June'} year={'2020'} CG={'cm of uttarpradesh'} />
        </div>
        <Testimonials image={farmer1} name={'Sneha'} designation={'owner, Food processing Unit'} 
        info={'Before the FarmsBook, We were Facing the issue of production quality control and traceability. The FarmsBook is addressing that issues. Now we are buying Product directly from farmers with the help of FarmsBook'} />
      </div>
      <div className="bottom-text">
        <p>Grow your agriculture business with FarmsBook</p>
        <img src={download} alt="Download" />
      </div>
      </div>
      <Footer />
      </div>
  );
}

export default App;
