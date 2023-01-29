import { useSelector } from "react-redux"
import {
  groupFilter,
  groupSort,
} from "./../../../../../redux/reducers/content/catalog/assortment/filtersReducer"
// components
import ComboBox from "./combo_box/ComboBox"
import ParamList from "./list_box/ParamList"
import PriceBox from "./price_box/PriceBox"
import CancelWindow from "./cancel_window/CancelWindow"
import ParamFilter from "./param_filter/ParamFilter"
import SortingBy from "./sorting_by/SortingBy"
import SearchBarCatalog from "./../../search_bar/SearchBarCatalog"
// styles
import styles from "./css/Filtres.module.css"
import stylesSearch from "./css/SearchBarCatalog.module.css"
import stylesRangeCheck from "./css/BoxRangeAndCheck.module.css"
import stylesSortingBy from "./css/BoxSortingBy.module.css"

const Filters = () => {
  const filter = useSelector((state) => {
    return state.filter.currentfilter
  })

  const currentSortingBy = useSelector((state) => {
    return state.filter.currentSortingBy
  })

  const renderFilter = (filter, indexF) => {
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
        return <div>???</div>
    }
  }

  const getPropertes = () => {
    let mass = []
    let k = 0
    for (var grouping in groupSort) {
      mass.push(
        <SortingBy grouping={grouping} key={k}>
          {groupSort[grouping]}
        </SortingBy>
      )
      k++
    }
    return mass
  }

  return (
    <div className={styles.filters}>
      <div className={styles.checkAndRange}>
        <CancelWindow />
        {filter.filters.map((f, indexF) => (
          <ComboBox styles={stylesRangeCheck} key={indexF} title={f.title}>
            <ParamList key={indexF} id={f.id}>
              {renderFilter(f, indexF)}
            </ParamList>
          </ComboBox>
        ))}
      </div>
      <div className={styles.sortingByAndSearch}>
        <SearchBarCatalog styles={stylesSearch} />
        <ComboBox
          styles={stylesSortingBy}
          title={`Порядок: ${currentSortingBy}`}
        >
          <ParamList>{getPropertes()}</ParamList>
        </ComboBox>
      </div>
    </div>
  )
}

export default Filters
