import React from 'react';
import './About.css';
import excellenceImg from '../../assets/excellence.webp';
import engagementImg from '../../assets/engagement.jpg';
import listeningImg from '../../assets/listening.png';
import innovationImg from '../../assets/innovation.avif';
import approcheImg from '../../assets/approche.avif';
import seoImg from '../../assets/seo.png';
import marketingImpg from '../../assets/marketing.png';
import copywritingImpg from '../../assets/copywriting.png';
import adsImg from '../../assets/ads.png';
import nectar from '../../assets/nectar.jpeg';
import ecoleImg from '../../assets/ecole.jpeg';
import ademGrow from '../../assets/ademGrow.png';
import soteca from '../../assets/soteca.png';




const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
        360° WAS BORN FROM THE PASSION AND ENTHUSIASM OF A TEAM DEDICATED TO DIGITAL MARKETING
        Founded on strong values and guided by a bold vision, our company strives to achieve excellence in everything undertakes.
        </p>
      </div>

      <div className="section">
        <h3>Our Vision</h3>
        <p>Our vision is to become the essential partner for companies helping them to 
            progress and innovate in a constantly evolving environment. 
            We aspire to be recognized as catalysts for our clients' success by providing creative, 
            tailored marketing solutions that drive their sustainable growth.
        </p>
      </div>

      <div className="section">
        <h3>Our Mission</h3>
        <p>To meet the growing needs of businesses looking to succeed in the digital age, we embarked on this adventure with a well-defined objective:
           Provide quality marketing services that enable businesses to thrive the digital world in perpetual transformation..
        </p>
      </div>

      <div className="section">
        <h3>Our Values</h3>
        <p>Our values are the foundation on which our work is based, guiding us every step of the way to shape quality results</p>
        <div className="values-container">
          <div className="value">
            <img src={excellenceImg} alt="Excellence Icon" />
            <p>Excellence</p>
          </div>
          <div className="value">
            <img src={engagementImg} alt="Engagement Icon" />
            <p>Engagement</p>
          </div>
          <div className="value">
            <img src={listeningImg} alt="Listening Icon" />
            <p>Active Listening</p>
          </div>
          <div className="value">
            <img src={innovationImg} alt="Innovation Icon" />
            <p>Innovation & Creation</p>
          </div>
          <div className="value">
            <img src={approcheImg} alt="Personalized Approach Icon" />
            <p>Personalized Approach</p>
          </div>
          </div>
      </div>

      <div className="section">
        <h3>Our Services</h3>
        <p>We offer a full range of services specifically designed to satisfy your digital needs.</p>
        <div className="services-container">
          <div className="service">
            <img src={seoImg}  alt="SEO Icon" />
            <p>SEO & SEA</p>
          </div>
          <div className="service">
            <img src={marketingImpg}  alt="Marketing Strategy Icon" />
            <p>Marketing Strategies & Data Analysis</p>
          </div>
          <div className="service">
            <img src={copywritingImpg}  alt="Copywriting Icon" />
            <p>Copywriting</p>
          </div>
          <div className="service">
            <img src={adsImg}  alt="Ads Management Icon" />
            <p>Ads Management</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Our Clients</h3>
        <p>customers who trust us</p>
        <div className="Client">
            <img src={nectar}  alt="Nectar Icon" />
        </div>
        <div className="Client">
            <img src={ecoleImg}  alt="Nectar Icon" />
        </div>
        <div className="Client">
            <img src={ademGrow}  alt="Nectar Icon" />
        </div>
        <div className="Client">
            <img src={soteca}  alt="Nectar Icon" />
        </div>
        
      </div>
    </div>
  );
};

export default About;