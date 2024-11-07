import PropTypes from "prop-types";

const Projects = ({ t }) => {
  return (
    <div>
      <h1>{t("projects.title")}</h1>
      <p>{t("projects.text")}</p>
    </div>
  );
};
Projects.propTypes = {
  t: PropTypes.func.isRequired,
};
export default Projects;
