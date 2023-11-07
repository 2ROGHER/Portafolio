import React from "react";
import Presentation from "../pure/Presentation";
import photo from '../../assets/img/profile_without_bg.png';

const text = `Hi World 👋,
             my name is Roger Mestanza. I like to build things
            for web`;
const speed = 100;
var i = 0;

const writeLetters = () => {
  document.getElementById("letters").innerHTML = document
    .getElementById("letters")
    .innerHTML.slice(0, i);
  if (i < text.length) {
    document.getElementById("letters").innerHTML += text.charAt(i) + "|";
    i++;
    setTimeout(() => {
      writeLetters();
    }, speed);
  }
};

const cursorPointer = () => {
  return <div className="cursor"></div>;
};

const PresentationContainer = () => {
  return (
    <>
      <Presentation
        text={text}
        writeLetters={writeLetters}
        cursorPointer={cursorPointer}
        photo={photo}
      />
    </>
  );
};

export default PresentationContainer;
