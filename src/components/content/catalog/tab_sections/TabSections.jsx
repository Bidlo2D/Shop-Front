import React from "react"
// components
import SectionsCatalog from "./section_catalog/SectionsCatalog"
import SearchBarCatalog from "../search_bar/SearchBarCatalog"

const TabSections = () => {
  return (
    <div>
      <SectionsCatalog></SectionsCatalog>
      <SearchBarCatalog></SearchBarCatalog>
    </div>
  )
}

export default TabSections
