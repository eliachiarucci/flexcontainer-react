import React from "react";
import FlexContainer from "./FlexContainer";
import Skills from "./Skills";
const App = () => {
  let skills = ["test", "test2"];
  return (
    <FlexContainer type="horizontal" gap={50}>
      <div style={{ backgroundColor: "red", marginLeft: "20px", marginRight: "25px" }}>awfawf</div>
      {skills.map((skill) => (
        <Skills style={{ backgroundColor: "red" }} skill={skill} key={skill}></Skills>
      ))}
    </FlexContainer>
  );
};

export default App;
