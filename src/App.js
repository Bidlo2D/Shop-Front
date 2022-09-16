import React from "react"
// styles
import './css/App.css';
// components
import Header from './components/header/Header';
import Content from './components/main/Content';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
