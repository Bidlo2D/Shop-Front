import { useSelector } from "react-redux"
const Content = () => {
  const tab = useSelector((state) => {
    return state.tabContent.currentView
  })
  return tab
}

export default Content
