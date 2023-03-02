import React from 'react';

function Languages() {
  return (
    <div>
      <h2>Languages Spoken</h2>
      <ul className="pentalingual">
        <div className="English">
          <li>
            <strong>English</strong>
          </li>
          <p>
            English is my mother tongue, due to this it is my strongest
            language.
          </p>
        </div>
        <div className="French">
          <li>
            <strong>French</strong>
          </li>
          <p>
            I am fluent in French, both written and spoken. I have studied it
            since I was 11 years old. In 2019 I lived in France for 6 months: in
            Montpellier for 3 months and in Quiberon for 3 months. While
            studying a Bachelor of Arts Degree at the University of Auckland,
            French was one of my two majors. French speakers often mistake me
            for being a native French speaker due to my fluency and native
            accent.
          </p>
        </div>
        <div className="Chinese">
          <li>
            <strong>Chinese (Mandarin)</strong>
          </li>
          <p>
            I am proficient in Mandarin, both written and spoken. While studying
            a Bachelor of Arts Degree at the University of Auckland,
            Chinese(Mandarin) was one of my two majors. In 2018 I travelled to
            China for a holiday and greatly enjoyed visiting and navigating
            rural areas where no one spoke English. I am often told by native
            Chinese speakers they are impressed by my accent.
          </p>
        </div>
        <div className="Spanish">
          <li>
            <strong>Spanish</strong>
          </li>
          <p>
            I am proficient in Spanish. While studying a Bachelor of Arts Degree
            at the University of Auckland, I added Spanish papers to my
            curriculum for fun and received high grades. I have also traveled to
            Spain and am confident in my ability to read, write, and speak
            Spanish.
          </p>
        </div>
        <div className="Italian">
          <li>
            <strong>Italian</strong>
          </li>
          <p>
            I am able to read, and understand Italian. While studying a Bachelor
            of Arts Degree at the University of Auckland, I added an Italian
            paper to my curriculum and received the highest grade in my course.
            I have also traveled to Italy and am confident in my ability to
            communicate with Italian speakers. Unfortunately due to the fact I
            have encountered very few Italian speakers in New Zealand, I have
            not been able to keep up with practice as much as my other
            languages, however I believe I would be able to quickly pick it up
            again and attain the same level of spoken and written Italian once I
            find other Italian speakers.
          </p>
        </div>
      </ul>
    </div>
  );
}

export default Languages;
