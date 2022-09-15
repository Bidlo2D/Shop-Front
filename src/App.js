import './css/App.css';
import React from "react"
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
