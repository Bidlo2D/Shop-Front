import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  ideasLoad,
  movingLeft,
  movingRight,
} from "../../redux/reducers/content/action"
// components
import Idea from "./Idea"
// styles
import styles from "./css/IdeaList.module.css"
// images
import arrowL from "./images/arrowL.png"
import arrowR from "./images/arrowR.png"

const IdeaList = () => {
  const dispatch = useDispatch()
  const ideas = useSelector((state) => {
    return state.ideaListReducer.ideasShow
  })

  useEffect(() => {
    dispatch(ideasLoad())
  }, [dispatch])
  return (
    <div className={styles.main}>
      <div className={styles.title}>Идеи для интерьеров</div>
      <div className={styles.list}>
        <div
          onClick={() => {
            dispatch(movingLeft())
          }}
          className={styles.arrowBlock}
        >
          <img src={arrowL} className={styles.arrow} alt=""></img>
        </div>
        <div className={styles.listWrapper}>
          {ideas.map((idea, index) => (
            <Idea key={index} name={idea.title} image={idea.image} />
          ))}
        </div>
        <div
          onClick={() => {
            dispatch(movingRight())
          }}
          className={styles.arrowBlock}
        >
          <img src={arrowR} className={styles.arrow} alt=""></img>
        </div>
      </div>
      <div className={styles.button}>Посмотреть все идеи</div>
    </div>
  )
}

export default IdeaList
