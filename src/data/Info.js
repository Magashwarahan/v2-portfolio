import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Myself Magashwarahan and I greatly aspire to acquire profound insights
        on new trends under development,to quench my thirst for learning.Two
        things I can't live without Coffee and Coding <br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)"
  };
  return (
    <>
      <p>
        I am Programming enthusiast and fullstack Web developer.
        <br />
        <br />
        Currently finished my 12th grade😅.
        <br />
        <br />I love exploring different kind of fields and I also excited to
        deep dive in the field of networking and i have some good knowledge in
        it.
        <br />
        <br />
        At last, Feel free to{" "}
        <a href="#connect" style={style}>
          Contact ME.
        </a>{" "}
        We can listen to good POP music together 🎧.
      </p>
    </>
  );
};
