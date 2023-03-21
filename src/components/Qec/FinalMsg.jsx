import React from "react";
import Navbar  from '../Home/navigationBar/Navbar'
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import Topheader from "../Home/topHeader/Topheader";
import './FinalMsg.css'

const FinalMsg = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />

      <div className="messHead-container">
        <header className="message-header">
          <div className="message-text">
            <h1>Final Message Director</h1>
          </div>
        </header>
        </div>

   <section class="message-section">
   <div class="message-container">
    <h2 class="message-heading1">DIRECTOR (QEC) MESSAGE:</h2>
    <div class="red-underline"></div>
    <h3 class="message-heading2">Saleem Raza Bhatti (Ph.D.)</h3>
    <p class="message-paragraph">
    "Education is the basis of progress, and innovative, quality education is the key to unlocking our full potential as individuals and as a society. Through education, we learn new skills, enhance our knowledge, and develop critical thinking abilities that allow us to tackle complex challenges. Emaan Institute of Management & Sciences Karachi is committed to providing an innovative and quality education, and is about more than just memorizing facts and figures; it's about fostering creativity, encouraging collaboration, and promoting lifelong learning. It's about empowering students to think outside the box and explore new ideas and perspectives. As we navigate an ever-changing world, it's essential that we prioritize innovative and quality education. By investing in education, we invest in our future, ensuring that the next generation has the tools they need to succeed and make a positive impact on the world. So let us strive for innovative and quality education, one that fosters curiosity, creativity, and a lifelong love of learning. Together, we can create a brighter future for all." Innovative education is key to preparing students for the rapidly changing world of tomorrow. It's about going beyond the traditional classroom and finding new and creative ways to engage students in the learning process. <br/>My message is to inspire and encourage innovative education innovative education is about empowering students to think outside the box and challenge the status quo. Let's create a learning environment that inspires creativity and curiosity!" "The future belongs to those who can adapt and innovate. Let's equip our students with the skills and knowledge they need to succeed in the 21st century." "Innovative education is not just about technology or implements, it's about creating meaningful learning experiences that prepare students for real-world challenges and opportunities." "Let's embrace the power of collaboration, critical thinking, and problem-solving to foster a culture of innovation in our Institutions "Innovative education is about meeting students where we are helping them to discover their full potential. Let's create personalized learning pathways that cater to each student's unique interests and abilities." Remember, innovation starts with a willingness to experiment and take risks. Let's inspire the next generation of learners to dream big and push the boundaries of what's possible!<br></br>
    <span className="bold-red">Saleem Raza Bhatti (Ph.D.)</span> <br/>
  <span className="bold-red">Director Quality Enhancement Cell</span> <br/>
  <span className="bold-red">Emaan Institute of Management & Sciences Karachi.</span>
</p>
</div>
</section>

<Footer />
    </div>
  );
};


export default FinalMsg;