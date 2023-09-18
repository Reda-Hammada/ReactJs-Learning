import React, { useState } from "react";
import { skillsPropsType } from "./skills.types";
const Skills = (props: skillsPropsType) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <>
        <ul>
          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </ul>
        {isLoggedIn ? (
          <button>Start Learning</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </>
    </div>
  );
};

export default Skills;
