import React from "react"
// styles
import styles from "./css/Order.module.css"
import { useSelector } from "react-redux"
import ItemOrder from "./item_order/ItemOrder"
import ButtonTextLink from "./../../../ButtonTextLink"

const Order = () => {
  const products = useSelector((state) => {
    return state.bucket.products
  })

  return (
    <div className={styles.order}>
      {products.length === 0 ? (
        <div className={styles.nothing}>
          <div className={styles.text}>
            <p>В корзине нет товаров</p>
            <p>Найдите то, что вам нужно в каталоге или при помощи поиска</p>
          </div>
          <ButtonTextLink style={styles.buttonNothing} to="/catalog">
            Вернуться к покупкам
          </ButtonTextLink>
        </div>
      ) : (
        products.map((item, i) => (
          <ItemOrder
            key={i}
            id={item.id}
            name={item.name}
            color={item.color}
            image={item.image}
            price={item.price}
          />
        ))
      )}
    </div>
  )
}

export default Order
