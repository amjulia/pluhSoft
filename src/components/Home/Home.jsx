import PropTypes from 'prop-types';
const Home = ({t}) => {
   
    
  return (
    <div>
        <h1>{t('home.title')}</h1>
      <p>{t('home.text')}</p>
      
    </div>
  )
}
Home.propTypes = {
    t: PropTypes.func.isRequired, 
  };
export default Home
