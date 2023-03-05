import React from 'react';
import { DiReact } from 'react-icons/di';
import { TbBrandJavascript, TbHtml, TbApi, TbSql } from 'react-icons/tb';
import { BsFiletypeCss, BsGithub } from 'react-icons/bs';
import { SiAuth0, SiAmazonaws, SiTailwindcss, SiCsharp } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';

function Tech() {
  return (
    <div class="gfg">
      <img src="../../7.jpg" />
      <div className="boxes">
        <h1>Tech I have gained experience in:</h1>
        <section class="nr1">
          <div class="container">
            <div class="box1">
              <DiReact />
              React
            </div>
            <div class="box2">
              <TbBrandJavascript />
              Node.js
            </div>
            <div class="box3">
              <TbHtml />
              HTML
            </div>
            <div class="box4">
              <BsFiletypeCss />
              CSS
            </div>
            <div class="box5">
              <SiTailwindcss />
              TailwindCSS
            </div>
            <div class="box6">
              <BsGithub />
              Github
            </div>
            <div class="box7">
              <TbApi />
              APIs
            </div>
            <div class="box8">
              <SiAuth0 />
              Auth0
            </div>
            <div class="box9">
              <TbSql />
              SQL
            </div>
            <div class="box10">
              <FaPhp />
              PHP
            </div>
            <div class="box11">
              <SiCsharp />
              C#
            </div>
            <div class="box12">
              <SiAmazonaws />
              AWS Cloud
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tech;
