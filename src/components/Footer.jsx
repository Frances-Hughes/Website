import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://github.com/Frances-Hughes">
              <i class="icon ion-social-github">
                <AiFillGithub />
                <h6>Github</h6>
              </i>
            </a>
            <a href="https://www.linkedin.com/in/frances-l-hughes/">
              <i class="icon ion-social-linkedin">
                <AiFillLinkedin />
                <h6>LinkedIn</h6>
              </i>
            </a>
            <a href="https://www.instagram.com/francesroundtheworld/">
              <i class="icon ion-social-instagram">
                <AiFillInstagram />
                <h6>Instagram</h6>
              </i>
            </a>
            <a href="https://www.facebook.com/ViveLaFrances">
              <i class="icon ion-social-facebook">
                {' '}
                <SiFacebook />
                <h6>Facebook</h6>
              </i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="http://localhost:3000/home">Home</a>
            </li>
            <li class="list-inline-item">
              <a href="http://localhost:3000/contact">Contact Me</a>
            </li>
            <li class="list-inline-item">
              <a href="http://localhost:3000/">About Me</a>
            </li>
          </ul>
          <p class="copyright">Frances Hughes © 2023</p>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Footer;
