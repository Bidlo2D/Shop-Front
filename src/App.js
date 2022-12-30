import React from "react"
// styles
import styles from './css/App.module.css';
// components
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.wrapper}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
