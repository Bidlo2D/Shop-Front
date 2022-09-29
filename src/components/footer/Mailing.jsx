import React from "react"
import backGround from "./images/Mailing.png"
import styles from "./css/Mailing.module.css"
const Mailing = () => {
  return (
    <div className={styles.mailing}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Подпишитесь на рассылку и получите скидку 15% на первый заказ{" "}
        </p>
        <form action="" className={styles.formMail}>
          <input
            className={styles.mail}
            type="text"
            name="mail"
            placeholder="Ваш e-mail"
          />
          <input className={styles.button} type="button" value="Подписаться" />
        </form>
      </div>
    </div>
  )
}

export default Mailing
