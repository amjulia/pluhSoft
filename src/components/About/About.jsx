import PropTypes from 'prop-types';

const About = ({t}) => {
  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.text')}</p>
    </div>
  )
}

About.propTypes = {
    t: PropTypes.func.isRequired, 
  };

export default About;
