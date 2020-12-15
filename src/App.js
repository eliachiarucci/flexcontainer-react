import React from "react";
import FlexContainer from "./FlexContainer";
const App = () => {
  let skills = ["test", "test2"];
  return (
    <FlexContainer type="horizontal" gap={50}>
      <div style={{ backgroundColor: "red", marginLeft: "20px", marginRight: "25px" }}>awfawf</div>
      {skills.map((skill) => (
        <div key={skill}>{skill}</div>
      ))}
    </FlexContainer>
  );
};

export default App;
