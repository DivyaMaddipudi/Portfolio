import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ExperienceContainer.css";

const ExperienceContainer = ({ project }) => (
  <div className="project">
    <h3>{project.companyName}</h3>

    <ul className="project__jd_list">
      <li className="project__jd">
        <p className="project__description">{project.jobDescription}</p>
      </li>
      <li>
        <p className="project__description">{project.jobDescription1}</p>
      </li>
      {project.jobDescription2 ? (
        <li>
          <p className="project__description">{project.jobDescription2}</p>
        </li>
      ) : null}
    </ul>
  </div>
);

export default ExperienceContainer;
