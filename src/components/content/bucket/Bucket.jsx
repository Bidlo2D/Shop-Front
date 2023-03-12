import React from "react"
import { Route, Routes } from "react-router-dom"
// styles
import styles from "./css/Bucket.module.css"
// components
import Path from "./../path/Path"
import Order from "./orders/Order"
import MakingOrder from "./making_order/MakingOrder"

const Bucket = () => {
  return (
    <div className={styles.bucket}>
      <div className={styles.wrapper}>
        <Path />
        <Routes>
          <Route path="/*" element={<Order />} />
          <Route path="making" element={<MakingOrder />} />
        </Routes>
      </div>
    </div>
  )
}

export default Bucket
