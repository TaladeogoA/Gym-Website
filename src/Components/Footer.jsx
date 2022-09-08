import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footer logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            minus vel corrupti rem sapiente libero?
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/$">Blog</Link>
          <Link to="/$">Case Studies</Link>
          <Link to="/$">Events</Link>
          <Link to="/$">Communities</Link>
          <Link to="/$">FAQs</Link>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/$">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>&copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
