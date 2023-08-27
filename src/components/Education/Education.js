import React from "react";
import uniqid from "uniqid";
import { education } from "../../portfolio";
// import EducationContainer from '../EducationContainer/EducationContainer'
import "./Education.css";

const Education = () => {
  if (!education.length) return null;

  return (
    <section id="education" className="section education">
      <h2 className="section__title">Education</h2>
      <ul className="eduction__list">
        {education.map((skill) => (
          <li key={uniqid()} className="eduction__list-item btn btn--plain">
            <p>
              <li>
                <h3>{skill.name}</h3>
              </li>
            </p>
            <p>
              <li style={{ fontSize: "18px" }}>{skill.degree}</li>
            </p>
            <p>
              <li style={{ fontSize: "18px" }}>
                <b>Major : </b> {skill.branch}
              </li>
            </p>
            <p>
              <li style={{ fontSize: "18px" }}>
                <b>CGPA : </b> {skill.gpa}
              </li>
            </p>
            <p>
              <li style={{ fontSize: "18px" }}>
                <b>Course Work : </b>
                {skill.courseWork}
              </li>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
