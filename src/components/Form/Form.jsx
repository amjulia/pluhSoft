import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import PropTypes from 'prop-types';
const Form = ({t}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data); 
  };
  return (
    <div className={styles.container}>
      <h1>{t('form.title')}</h1>
      <div className={styles.formBox}> 
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="name" placeholder={t('form.name')} {...register("name", { required: "Имя обязательно" })}/>
          {errors.name && <span style={{color: "red"}}>{errors.name.message}</span>}
          <input type="email" name="email" placeholder={t('form.email')} {...register("email", { 
                required: "Email обязателен", 
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Введите корректный email"
                }
              })}/>
              {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
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

