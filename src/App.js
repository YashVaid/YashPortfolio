import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <a href="/" className="logo">
          <img className="Logo" src="YVlogo.png" /> Yashu
        </a>
        <div id="menu" className="fas fa-bars" />
        <nav className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="home" id="home">
        <div id="particles-js" />
        <div className="content">
          <h2>
            Hi There,
            <br /> I'm Yash <span>Vaid </span>
          </h2>
          <p>
            i am into <span className="typing-text" />
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down" />
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/yash-vaid-09573122b/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  aria-label="GitHub"
                  href="https://github.com/YashVaid/"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  aria-label="Twitter"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  className="telegram"
                  aria-label="Telegram"
                  href="https://web.telegram.org/a/"
                  target="_blank"
                >
                  <i className="fab fa-telegram-plane" />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  aria-label="Instagram"
                  href="https://www.instagram.com/_yaasshhu_ "
                >
                  <i className="fab fa-instagram" target="_blank" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="year1-banner_img.png"
            alt=""
          />
        </div>
      </section>
      
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt" /> About <span>Me</span>
        </h2>
        <div className="row">
          <div className="image">
            <img draggable="false" className="tilt" src="YashPic.jpg" alt="" />
          </div>
          <div className="content">
            <h3>I'm Yash Vaid </h3>
            <span className="tag">Front-End Developer</span>
            <p>
              I am a Front-End developer based in Jaipur, India. I am a Computer
              Application undergraduate from JKLU. I am very passionate about
              improving my coding skills &amp; developing applications &amp;
              websites. I build and Websites using ReactJs. Working for myself
              to improve my skills. Love to build Websites.{" "}
            </p>
            <div className="box-container">
             
              <div className="box">
                <p>
                  <span> email : </span>
                  <a href="yashvaid460@gmail.com"> yashvaid460@gmail.com</a>
                </p>
                <p>
                  <span> place : </span> Jaipur, Rajasthan
                </p>
              </div>
            </div>
            <div className="resumebtn">
              <a
                href="https://drive.google.com/file/d/1my1VMZB0ew0yUCYO31QW732mIEf94msv/view?usp=drive_link"
                target="_blank"
                className="btn"
              >
                <span>Resume</span>
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code" /> Skills &amp;{" "}
          <span>Abilities</span>
        </h2>
        <div className="container">
          <div className="row" id="skillsContainer">
            <div className="bar">
              <div className="info">
                <img src="HTML.png" />
                <span>HTML5 </span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="CSS.png" />
                <span>CSS3 </span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="JS.png" />
                <span>JavaScript</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="reactJS.png" />
                <span>ReactJs</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="python.png" />
                <span>Python </span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="Mysql.png" />
                <span>MySQL</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="Bootstrap.png " />
                <span>Bootstrap</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="PHP.png" />
                <span>PHP</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="Java.png" />
                <span>Java</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="C++.png" />
                <span>C++</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="Github.png" />
                <span>GitHub</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src="Wordpress.png" />
                <span>Wordpress</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap" /> My <span>Education</span>
        </h1>
        <p className="qoute">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src="JKLU.jpeg" alt="" />
            </div>
            <div className="content">
              <h3>Bachelor of Engineering in Computer Application</h3>
              <p>JK Lakshmipat Unviersity | JKLU</p>
              <h4>2022-2025 | Pursuing</h4>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <h3>HSC Commerce | Informatic Practices</h3>
              <p>St. Anselm's North City School | CBSE</p>
              <h4>2022 | Completed</h4>
            </div>
            <div className="image">
              <img draggable="false" src="Anselm.jpeg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img draggable="false" src="School.jpeg" alt="" />
            </div>
            <div className="content">
              <h3>SSC Commerce | Informatic Practices</h3>
              <p>St. Anselm's North City School | CBSE</p>
              <h4>2020 | Completed</h4>
            </div>
          </div>
        </div>
      </section>
      
      <section className="experience" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase" /> Experience{" "}
        </h2>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Self Training</h2>
              </div>
              <div className="desc">
                <h3>Front-End Developer</h3>
                <p>Oct 2023</p>
              </div>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Pro Gen X</h2>
              </div>
              <div className="desc">
                <h3>Web Developer | Internship</h3>
                <p>5th June 2023 - 20th July 2023</p>
              </div>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Flask IT Solutions</h2>
              </div>
              <div className="desc">
                <h3>Website Developer | Internship</h3>
                <p>15th May 2024 - 1th july 2024</p>
              </div>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Pro Gen X</h2>
              </div>
              <div className="desc">
                <h3>Web Developer | Internship</h3>
                <p>5th June 2023 - 20th July 2023</p>
              </div>
            </div>
          </div>
         
        </div>
       
      </section>
     
      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset" /> Get in <span>Touch</span>
        </h2>
        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="Contact.jpg" alt="" />
            </div>
            <form id="contact-form">
              <div className="form-group">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required=""
                  />
                  <i className="fas fa-user" />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                  <i className="fas fa-envelope" />
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required=""
                    defaultValue={""}
                  />
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact section ends */}
      {/* footer section starts */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Yash's Portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. <br /> <br /> Keep Rising 🚀. Connect with me
              over live chat!
            </p>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#home">
              <i className="fas fa-chevron-circle-right" /> home
            </a>
            <a href="#about">
              <i className="fas fa-chevron-circle-right" /> about
            </a>
            <a href="#skills">
              <i className="fas fa-chevron-circle-right" /> skills
            </a>
            <a href="#education">
              <i className="fas fa-chevron-circle-right" /> education
            </a>
            <a href="#work">
              <i className="fas fa-chevron-circle-right" /> work
            </a>
            <a href="#experience">
              <i className="fas fa-chevron-circle-right" /> experience
            </a>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <p>
              {" "}
              <i className="fas fa-phone" />
              +91 90244-03602
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope" />
              yashVaid460@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-map-marked-alt" />
              Jaipur, India-302012
            </p>
            <div className="share">
              <a
                href="https://www.linkedin.com/in/yash-vaid-09573122b/"
                className="fab fa-linkedin"
                aria-label="LinkedIn"
                target="_blank"
              />
              <a
                href="https://github.com/YashVaid/"
                className="fab fa-github"
                aria-label="GitHub"
                target="_blank"
              />
              <a
                href="mailto:yashvaid460@gmail.com"
                className="fas fa-envelope"
                aria-label="Mail"
                target="_blank"
              />
              <a
                href="https://twitter.com/"
                className="fab fa-twitter"
                aria-label="Twitter"
                target="_blank"
              />
              <a
                href="https://www.instagram.com/_yaasshhu_"
                className="fab fa-instagram"
                aria-label="Telegram"
                target="_blank"
              />
            </div>
          </div>
        </div>
        <h1 className="credit">
          Designed with <i className="fa fa-heart pulse" /> by{" "}
          <a href="https://www.linkedin.com/in/yash-vaid-09573122b/">
            {" "}
            YashVaid
          </a>
        </h1>
      </section>
    </>
  );
}

export default App;
