import React from "react";
import "./style.css";
const SkillsBox = () => {
  const Skills = {
    WebSkills: [
      "HTML-CSS",
      "JavaScript",
      "React",
      "Context-api",
      "React-Router-Dom",
      "Next.js",
      "Framer Motion",
      "Styled-Components",
      "React Native",
      "Firebase",
      "GIT and GitHub"
    ],
    CompetetiveSkills: ["Illustrator", "Figma", "Indesign", "Spline"],
    Extras: ["Linux", "VScode", "Bug-Bounty"]
  };

  return (
    <>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <h3>As Web-Developer</h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>As a designer</h3>
          <ul>
            {Skills.CompetetiveSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Extras</h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
