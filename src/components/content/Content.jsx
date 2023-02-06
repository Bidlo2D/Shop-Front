import { Route, Routes } from "react-router-dom"
import MainPage from "./main_page/MainPage"
import Catalog from "./catalog/Catalog"

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog/*" element={<Catalog />} />
      </Routes>
    </main>
  )
}

export default Content
