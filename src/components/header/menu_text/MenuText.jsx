import React from "react"
import { useSelector } from "react-redux"
// components
import Menu from "../../universal/Menu"
// styles
import textStyle from "./css/MenuText.module.css"
import ButtonTextLink from "../../universal/ButtonTextLink"

/* Taking into account the parent where 'justify-content: space-between' */
const MenuText = () => {
  const visible = useSelector((state) => {
    return state.search.visible
  })

  const titles = [
    <ButtonTextLink to="catalog">Каталог</ButtonTextLink>,
    <p>Дизайнерам</p>,
    <p>Шоу-рум</p>,
    <p>Доставка и оплата</p>,
  ]

  return <div>{visible && <Menu style={textStyle.menu} items={titles} />}</div>
}

export default MenuText
