import React, { memo } from "react"

const PageButton = memo((props) => {
  return <div onClick={() => {}}>{props.page + 1}</div>
})

export default PageButton
