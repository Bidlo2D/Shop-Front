import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MainPage from "../content/main_page/MainPage"
const Content = () => {
  const tab = useSelector((state) => {
    return state.tab.currentView
  })
  const dispatch = useDispatch()
  useEffect(() => {
    let ignore = false

    if (!ignore) dispatch(<MainPage></MainPage>)
    return () => {
      ignore = true
    }
  }, [])
  return tab
}

export default Content
