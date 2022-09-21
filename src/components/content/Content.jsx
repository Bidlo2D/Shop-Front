import React from "react"
import { useEffect } from "react"
import { useState } from "react"
// styles
import "./css/Content.css"
import Description from "./Description"
import Directories from "./Directories"
import NewProductsList from "./NewProductsList"
// components
import Title from "./Title"

const Content = () => {
  const [IStart, setIStart] = useState(0)
  const [IEnd, setIEnd] = useState(1)
  const listTest = [
    { name: "#0 - Стол" },
    { name: "#1 - Стул" },
    { name: "#2 - Шкаф" },
    { name: "#3 - Кресло" },
    { name: "#4 - Диван" },
  ]
  const onClick = () => {
    setIStart((s) => (s < listTest.length - 1 ? (s += 1) : (s = 0)))
    setIEnd((e) => (e < listTest.length - 1 ? (e += 1) : (e = 0)))
  }
  const [sub, setSub] = useState([])
  useEffect(() => {
    setSub([listTest.at(IStart - 1), listTest[IStart], listTest[IEnd]])
  }, [IStart])

  return (
    <div onClick={onClick} className="content">
      <Title />
      <Description />
      <Directories />
      <NewProductsList products={sub} />
    </div>
  )
}

export default Content
