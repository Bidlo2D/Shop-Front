import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ideasLoad, movingRight } from "../../redux/reducers/content/action"
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
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.title}>Идеи для интерьеров</div>
      <div className={styles.list}>
        <div className={styles.arrowBlock}>
          <img src={arrowL} className={styles.arrow}></img>
        </div>
        <div className={styles.listWrapper}>
          {ideas.map((idea, index) => (
            <Idea key={index} name={idea.title} image={idea.image} />
          ))}
        </div>
        <div
          onClick={() => {
            movingRight()
          }}
          className={styles.arrowBlock}
        >
          <img src={arrowR} className={styles.arrow}></img>
        </div>
      </div>
      <div className={styles.button}>Посмотреть все идеи</div>
    </div>
  )
}

export default IdeaList
