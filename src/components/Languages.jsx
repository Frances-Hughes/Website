import React from 'react';

function Languages() {
  return (
    <div class="gfg">
      <img src="../../3.jpg" />
      <div className="box">
        <h2>Languages and Proficiency</h2>
        <h3>
          I am pentalingual, having both lived in Europe, and studied foreign
          languages at the University of Auckland. Hover over a language title
          (in bold below) to see the English translation:
        </h3>
        <ul className="pentalingual">
          <div className="language">
            <li>
              <strong>English</strong>
            </li>
            <p>
              English is my mother tongue, due to this it is my strongest
              language. If you wish to see the other languages I can speak,
              write, and understand, you will see them listed below. I advise
              the English translation is available if you hover over the name of
              the language.
            </p>
          </div>
          <div className="language">
            <li>
              <strong>
                <abbr
                  title="I am fluent in French, both written and spoken. I have studied it
              since I was 11 years old. In 2019 I lived in France for 6 months:
              in Montpellier for 3 months and in Quiberon for 3 months. While
              studying a Bachelor of Arts Degree at the University of Auckland,
              French was one of my two majors. French speakers often mistake me
              for being a native French speaker due to my fluency and native
              accent."
                >
                  French
                </abbr>
              </strong>
            </li>
            <p>
              Je parle couramment le français. Je peux lire, je peux écrire et
              je peux comprendre la majorité des accents français. J'ai commencé
              à l'étudier depuis l'âge de 11 ans. En 2019, j'ai habité en France
              pendant 6 mois : 3 mois à Montpellier et 3 mois à Quiberon. Quand
              j'étudiais ma Licence en Arts à l'Université d'Auckland, le
              français était l'une de mes deux majeures. Les francophones me
              prennent souvent pour un francophone natif en raison de ma
              fluidité et de mon accent naturel.
            </p>
          </div>
          <div className="language">
            <li>
              <strong>
                <abbr
                  title="I am proficient in Mandarin, both written and spoken. While
              studying a Bachelor of Arts Degree at the University of Auckland,
              Chinese(Mandarin) was one of my two majors. In 2018 I travelled to
              China for a holiday and greatly enjoyed visiting and navigating
              rural areas where no one spoke English. I am often told by native
              Chinese speakers they are impressed by my accent. My Chinese name is '法兰' or 'Fà lán' which means 'French Orchid'"
                >
                  Chinese (Mandarin)
                </abbr>
              </strong>
            </li>
            <p>
              我会说中文, 我会写汉字, 和我也会理解。
              我需要更多地练习我的中文，以便我能够说得更流利。
              我拥有文学士学位。当我在奥克兰大学攻读文学学士学位期间，汉语（中文）是我两个专业之一。
              2018年，我前往中国度假，喜欢参观和穿越农村地区，那里没有人说英语。我经常被中国人告知，他们对我的口音印象深刻。我的中文名字是
              <strong>“ 法兰 ”</strong>。
            </p>
          </div>

          <div className="language">
            <li>
              <strong>
                <abbr
                  title="I am proficient in Spanish. While studying a Bachelor of Arts
                  Degree at the University of Auckland, I added Spanish papers to my
                  curriculum for fun and received high grades. I have also traveled
                  to Spain and am confident in my ability to read, write, and speak
                  Spanish.I am much more interested in studying coding and programming than foreign languages, so I hope to become 'fluent' in various programming languages as well."
                >
                  Spanish
                </abbr>
              </strong>
            </li>
            <p>
              Puedo hablar español. Mientras estudiaba para obtener mi
              Licenciatura en Artes en la Universidad de Auckland, agregué
              cursos de español a mi plan de estudios como pasatiempo y recibió
              altas calificaciones. También he viajado a España y tengo
              confianza en mi habilidad para leer, escribir y hablar en español.
              Estoy mucho más interesado en estudiar codificación y programación
              que en lenguas extranjeras, así que espero llegar a ser 'fluido'
              en varios lenguajes de programación también.
            </p>
          </div>

          <div className="language">
            <li>
              <strong>
                <abbr
                  title="I am able to read, and understand Italian. While studying a
                  Bachelor of Arts Degree at the University of Auckland, I added an
                  Italian paper to my curriculum and received the highest grade in
                  my course. I have also traveled to Italy and am confident in my
                  ability to communicate with Italian speakers. Unfortunately due to
                  the fact I have encountered very few Italian speakers in New
                  Zealand, I have not been able to keep up with practice as much as
                  my other languages, however I believe I would be able to quickly
                  pick it up again and attain the same level of spoken and written
                  Italian once I find other Italian speakers."
                >
                  Italian
                </abbr>
              </strong>
            </li>
            <p>
              Io posso leggere e comprendere l'italiano. Mentre studiavo per la
              mia Laurea in Lettere all'Università di Auckland, ho aggiunto un
              corso di italiano al mio curriculum e ho ottenuto il voto più alto
              del mio corso. Ho anche viaggiato in Italia e sono sicuro della
              mia capacità di comunicare con gli italiani. Purtroppo, a causa
              del fatto che ho incontrato pochi parlanti italiani in Nuova
              Zelanda, non sono stato in grado di mantenere la pratica quanto le
              mie altre lingue. Tuttavia, credo di poterlo riprendere
              rapidamente e raggiungere lo stesso livello di italiano parlato e
              scritto una volta trovati altri parlanti italiani.
            </p>
          </div>
        </ul>
      </div>

      <h3 class="second-txt">A Website by Frances Hughes</h3>
    </div>
  );
}

export default Languages;
