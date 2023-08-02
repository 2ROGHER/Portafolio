import React, { useEffect, useState } from "react";
import TechStack from "../pure/TechStack";
import axios from 'axios';
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
      <TechStack data={data} />
    </>
  );
};

export default TechStackContainer;
