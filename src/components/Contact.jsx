import React from 'react';

function Contact() {
  return (
    <>
      <div class="contact-container">
        <img src="../../2.jpg" />
        <div className="contact-box">
          <h2>Contact Me:</h2>
          <ul className="contact">
            <div className="email">
              <strong>
                <li>Email</li>
              </strong>
              <p>FrancesLHughes@hotmail.com</p>
            </div>
            <div className="phone">
              <strong>
                <li>Phone</li>
              </strong>
              <p>021 061 4757</p>
            </div>
            <div>
              <h3>
                Links to my Github, LinkedIn, Instagram, and Facebook can be
                found below in the footer.
              </h3>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
