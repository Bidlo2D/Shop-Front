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

const FiltersList = (props) => {
  const filters = useSelector(selectAllFilter)

  const мountingItem = (filter, indexF) => {
    switch (filter.group) {
      case groupFilter.CHECKLIST:
        return filter.params.map((p, indexP) => (
          <ParamFilter
            color={p.color}
            key={indexP}
            indexF={indexF}
            indexP={indexP}
          >
            {p.name}
          </ParamFilter>
        ))
      case groupFilter.RANGE:
        return <PriceBox index={indexF} />
      default:
        return null
    }
  }

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
            <ParamList key={indexF} indexF={indexF}>
              {мountingItem(f, indexF)}
            </ParamList>
          </ComboBox>
        ) : null
      )}
    </div>
  )
}

export default FiltersList
