import React, { useEffect, useState } from "react";
import TechStack from "../pure/TechStack";
import axios from "axios";
var x = 100;

const handleScrollLeft = () => {
  document.getElementsByClassName("skills-container")[0].scroll(x, 0);
  x += 100;
};
const handleScrollRigth = () => {
  document.getElementsByClassName("skills-container")[0].scroll(x, 0);
  x -= 100;
};
const TechStackContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // lets to get  data from out api.
    axios
      .get(`http://localhost:3001/api/skills`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <TechStack
        data={data}
        handleScrollLeft={handleScrollLeft}
        handleScrollRigth={handleScrollRigth}
      />
    </>
  );
};

export default TechStackContainer;
