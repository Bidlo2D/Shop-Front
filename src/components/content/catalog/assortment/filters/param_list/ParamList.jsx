import React, { memo } from "react"
import styles from "./css/ParamList.module.css"
import { useSelector } from "react-redux"
import { groupFilter } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
import ParamFilter from "./../param_filter/ParamFilter"
import PriceBox from "./../price_box/PriceBox"

const ParamList = memo((props) => {
  const filter = useSelector((state) => {
    return state.assortment.filtersParams[props.indexF]
  })

  const мountingItem = () => {
    switch (filter.group) {
      case groupFilter.CHECKLIST:
        return filter.params.map((p, indexP) => (
          <ParamFilter
            color={p.color}
            key={indexP}
            indexF={props.indexF}
            indexP={indexP}
          >
            {p.name}
          </ParamFilter>
        ))
      case groupFilter.RANGE:
        return <PriceBox index={props.indexF} />
      default:
        return null
    }
  }

  return <ul className={styles.collection}>{мountingItem()}</ul>
})

export default ParamList
