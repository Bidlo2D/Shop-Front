import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
//action
import {
  ideasLoad,
  ideasMovingRight,
  ideasMovingLeft,
} from "../../../../redux/reducers/content/ideaListReducer"
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
    return state.ideas.ideasShow
  })

  /* Load */
  useEffect(() => {
    dispatch(ideasLoad())
  }, [dispatch])

  return (
    <div className={styles.ideaList}>
      <div className={styles.title}>Идеи для интерьеров</div>
      <div className={styles.list}>
        {/* Arrow Left */}
        <div
          onClick={() => {
            dispatch(ideasMovingLeft())
          }}
          className={styles.arrowBlock}
        >
          <img
            draggable="false"
            src={arrowL}
            className={styles.arrow}
            alt=""
          ></img>
        </div>
        {/* List ideas */}
        <div className={styles.listWrapper}>
          {ideas.map((idea, index) => (
            <Idea key={index} name={idea.title} image={idea.image} />
          ))}
        </div>
        {/* Arrow Right */}
        <div
          onClick={() => {
            dispatch(ideasMovingRight())
          }}
          className={styles.arrowBlock}
        >
          <img
            draggable="false"
            src={arrowR}
            className={styles.arrow}
            alt=""
          ></img>
        </div>
      </div>
      <div className={styles.button}>Посмотреть все идеи</div>
    </div>
  )
}

export default IdeaList
