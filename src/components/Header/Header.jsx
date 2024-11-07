import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}><Link to="/">{`Главная`}</Link></li>
          <li className={styles.link}><Link to="/projects">{`Проекты`}</Link></li>
          <li className={styles.link}><Link to="/contact">{`Форма заявки`}</Link></li>
          <li className={styles.link}><Link to="/about">{`О компании`}</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
