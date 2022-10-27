import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
//action
import {
  ideasLoad,
  movingLeft,
  movingRight,
} from "../../redux/reducers/content/action"
// components
import Idea from "./Idea"
import ButtonAction from "../ButtonAction"
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
  /* Load */
  useEffect(() => {
    dispatch(ideasLoad())
  }, [dispatch])

  return (
    <div className={styles.main}>
      <div className={styles.title}>Идеи для интерьеров</div>
      <div className={styles.list}>
        {/* Arrow Left */}
        <ButtonAction
          onClick={() => {
            dispatch(movingLeft())
          }}
          style={styles.arrowBlock}
        >
          <img
            draggable="false"
            src={arrowL}
            className={styles.arrow}
            alt=""
          ></img>
        </ButtonAction>
        {/* List ideas */}
        <div className={styles.listWrapper}>
          {ideas.map((idea, index) => (
            <Idea key={index} name={idea.title} image={idea.image} />
          ))}
        </div>
        {/* Arrow Right */}
        <ButtonAction
          onClick={() => {
            dispatch(movingRight())
          }}
          style={styles.arrowBlock}
        >
          <img
            draggable="false"
            src={arrowR}
            className={styles.arrow}
            alt=""
          ></img>
        </ButtonAction>
      </div>
      <div className={styles.button}>Посмотреть все идеи</div>
    </div>
  )
}

export default IdeaList
