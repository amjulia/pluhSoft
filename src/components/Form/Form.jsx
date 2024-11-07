import styles from "./Form.module.css";
import PropTypes from 'prop-types';
const Form = ({t}) => {
  return (
    <div className={styles.container}>
      <h1>{t('form.title')}</h1>
      <div className={styles.formBox}> 
        <form className={styles.form}>
          <input type="text" name="name" placeholder={t('form.name')} />
          <input type="email" name="email" placeholder={t('form.email')} />
          <button>{t('form.button')}</button>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  t: PropTypes.func.isRequired, 
};
export default Form;
