import React, { useEffect, useState } from "react";
import Projects from "../pure/Projects";
import axios from "axios";

const text = ` Hi World 👋,
            <br /> my name is <div id="name">{name}</div> <br /> I build things
            for web`;
const writeLetters = () =>{
  text.forEach(element => {
    console.log(element);13
  });
};
const ProjectsContainer = () => {
  //lets get datas from our api.
  const [dataProject, setDataProject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/projects")
      .then((res) => {
        setDataProject(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Projects data={dataProject} text={text} writeLetters={writeLetters} />
    </>
  );
};

export default ProjectsContainer;
