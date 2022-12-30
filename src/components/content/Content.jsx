import { Route, Routes } from "react-router-dom"
import MainPage from "./main_page/MainPage"
import Catalog from "./catalog/Catalog"

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  )
}

export default Content
