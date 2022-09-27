import React from "react"
// styles
import "./css/Footer.css"
// components
import Mailing from "./Mailing"
import About from "./About"
const Footer = () => {
  return (
    <footer>
      <Mailing />
      <About />
    </footer>
  )
}

export default Footer
