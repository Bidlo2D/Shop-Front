import { Route, Routes } from "react-router-dom"
// styles
import styles from "./css/Content.module.css"
// components
import MainPage from "./main_page/MainPage"
import Catalog from "./catalog/Catalog"

const Content = () => {
  return (
    <main className={styles.content}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog/*" element={<Catalog />} />
      </Routes>
    </main>
  )
}

export default Content
