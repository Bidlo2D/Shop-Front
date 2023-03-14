import React from "react"
import { useSelector } from "react-redux"

const Counter = (props) => {
  const count = useSelector((state) => {
    let index = state.bucket.productsParam.findIndex((p) => p.id === props.id)
    return state.bucket.productsParam[index].count
  })

  return (
    <div className={props.style}>
      <span>{count}</span>
    </div>
  )
}

export default Counter
