import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import img1 from "./image/developer.svg";
import img2 from "./image/graphs.svg";
import img3 from "./image/product-launch.svg";
import img4 from "./image/waving.svg";
import Button from "./Components/Button/Button";
import About from "./Components/About/About";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Nav />
      <Header
        h2="Landing page template for developers & startups"
        p="Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes."
        btn1="explore"
        btn2="learn more"
        img={img1}
      />
      <section className="Introduce text-center w-50 m-auto">
        <h2 className="w-75 m-auto mb-4">
          Introduce your product quickly & effectively
        </h2>
        <p className="mb-4">
          Landy comes with multi-lingual support, all of the content is stored
          in the JSON files, so that you can manage the texts without having any
          prior knowledge in developing web applications using React.js.
        </p>
        <Button id="mission" name="get started" />
      </section>
      {/* about component */}
      <About
        id="about"
        img={img2}
        h2="Light, fast & responsive"
        p="This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling."
      />
      <Header
        id="mission"
        h2="Ready made sections"
        p="Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content."
        img={img3}
        display="none"
      />
      <About
        id="product"
        img={img4}
        p2="That's about it!"
        p="If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions."
      />
      {/* Contact form start */}
      <section className="contact container w-75" id="contact">
        <div className="row">
          <div className="col col-md-6 col-sm-12">
            <h2>Contact form</h2>
            <p>
              The following form demonstrates form validation in action. Contact
              form component reduces the amount of time it is being re-rendered
              by the user as it embraces uncontrolled form validation to reduce
              any unnecessary performance penalty.
            </p>
          </div>
          <div className="col col-md-6 col-sm-12">
            <form>
              <div>
                <label htmlFor="name">name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email..."
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <br />
                <textarea
                  type="email"
                  name="message"
                  id="message"
                  placeholder="Your Message..."
                />
              </div>
              <Button name="submit" />
            </form>
          </div>
        </div>
      </section>
      <footer className="text-center pt-4">
        <div className="container ">
          <section className="mb-4">
            <a href="#!" className="m-3">
              <FaFacebook />
            </a>

            <a className="m-3" href="#!">
              <FaTwitter />
            </a>

            <a className="m-3" href="#!">
              <FaLinkedin />
            </a>
            <a className="m-3" href="#!">
              <FaGithub />
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default App;
