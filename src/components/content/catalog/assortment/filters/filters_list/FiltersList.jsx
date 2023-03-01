import { useSelector } from "react-redux"
// styles
import styles from "./css/FiltersList.module.css"
import stylesRangeCheck from "./css/BoxRangeAndCheck.module.css"
// enums
import { groupFilter } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// components
import ParamFilter from "./../param_filter/ParamFilter"
import ParamList from "./../param_list/ParamList"
import PriceBox from "./../price_box/PriceBox"
import ComboBox from "../combo_box/ComboBox"
import CancelWindow from "../cancel_window/CancelWindow"
// selectors
import { selectAllFilter } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentSelector"

const FiltersList = () => {
  const filters = useSelector(selectAllFilter)

  return (
    <div className={styles.filtersList}>
      <CancelWindow />
      {filters.map((f, indexF) =>
        f.group !== groupFilter.SORT ? (
          <ComboBox
            styles={stylesRangeCheck}
            key={indexF}
            indexF={indexF}
            title={f.title}
          >
            <ParamList key={indexF} indexF={indexF} />
          </ComboBox>
        ) : null
      )}
    </div>
  )
}

export default FiltersList
