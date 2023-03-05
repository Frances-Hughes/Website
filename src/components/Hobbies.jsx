import React from 'react';

function Hobbies() {
  return (
    <>
      <div class="hobbies-container">
        <img src="https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg?w=750" />

        <div className="hobbies-box">
          <h2>My Hobbies:</h2>
          <ul className="contact">
            <div className="aboutme">
              <h2>
                I enjoy a range of hobbies and sports, some of which include:
              </h2>
              <ul>
                <div className="about">
                  <li>
                    <strong>Piano:</strong>
                    <img src="../../piano.jpg" />
                  </li>
                </div>
                <div className="about">
                  <li>
                    <strong>Bouldering:</strong>
                    <img src="../../bouldering1.jpg" />
                  </li>
                </div>
                <div className="about">
                  <li>
                    <strong>Baking:</strong>
                    <img src="../../baking1.jpg" />
                  </li>
                </div>
                <div className="about">
                  <li>
                    <strong>Cooking:</strong>
                    <img src="../../cooking1.jpg" />
                  </li>
                </div>
                <div className="about">
                  <li>
                    <strong>Bread Making:</strong>
                    <img src="../../bread1.jpg" />
                    <img src="../../bread2.jpg" />
                  </li>
                </div>

                <div className="about">
                  <li>
                    <strong>Gaming:</strong>
                    <img src="../../gaming1.jpg" />
                  </li>
                </div>
                <div className="about">
                  <li>
                    <strong>Hiking:</strong>
                    <img src="../../2.jpg" />
                  </li>
                </div>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hobbies;
