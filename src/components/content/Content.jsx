import { useSelector } from "react-redux"
const Content = () => {
  const tab = useSelector((state) => {
    return state.tab.currentView
  })
  return tab
}

export default Content
