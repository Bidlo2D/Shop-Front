import React from "react"
// styles
import styles from "./css/Footer.module.css"
// components
import About from "./About"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <About />
    </footer>
  )
}

export default Footer
