import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { useTranslation } from "react-i18next";
import Diagram from "./components/Diagram/Diagram";


const locales = {
  en: {title: "En"},
  ru: {title: "Ru"}
}

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <ul style={{display: "flex", justifyContent: "flex-end"}}>
        {Object.keys(locales).map((locale) => 
        <li key={locale}><button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} type="submit" onClick={() => i18n.changeLanguage(locale)}>{locales[locale].title}</button></li>)}
      </ul>
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/projects" element={<Projects t={t} />} />
          <Route path="/contact" element={<Form t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          <Route path="/diagram" element={<Diagram />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
