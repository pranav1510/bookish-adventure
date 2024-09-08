import React from "react";

import CompOne from './CompOne/CompOne.js';
import MainComp from './MainComp/MainComp.js';
import IconComp from './IconComp/IconComp.js';
import Challenges from "./Challenge/Challenges.js";
import EnrollComp from "./EnrollComp/EnrollComp.js";

const Home = ({navigate}) => {
  return (
    <>
      <CompOne />
      <MainComp navigate={navigate}/>
      <IconComp />
      <Challenges />
      <EnrollComp navigate={navigate}/>
    </>
  );
}

export default Home;