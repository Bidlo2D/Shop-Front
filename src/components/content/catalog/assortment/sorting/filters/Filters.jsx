// components
import ComboBox from "./combo_box/ComboBox"
import ParamList from "./list_box/ParamList"
import PriceBox from "./price_box/PriceBox"
import ModalWindow from "./modal_window/ModalWindow"
import ParamFilter from "./color/ParamFilter"
// styles
import styles from "./css/Filtres.module.css"
import { useSelector } from "react-redux"
import { groupFilter } from "./../../../../../../redux/reducers/content/catalog/assortment/filtersReducer"

const Filters = () => {
  const filter = useSelector((state) => {
    return state.filter.loadfilter
  })

  const renderFilter = (filter, indexF) => {
    switch (filter.group) {
      case groupFilter.LIST:
        return filter.params.map((p, indexP) => (
          <ParamFilter color={p.color} key={indexP} id={p.id}>
            {p.name}
          </ParamFilter>
        ))
      case groupFilter.RANGE:
        return <PriceBox index={indexF} />
      default:
        return <div>???</div>
    }
  }
  return (
    <div className={styles.filtres}>
      <ModalWindow />
      {filter.filters.map((f, indexF) => (
        <ComboBox key={indexF} text={f.text}>
          <ParamList key={indexF} id={f.id}>
            {renderFilter(f, indexF)}
          </ParamList>
        </ComboBox>
      ))}
      {/* <ComboBox text="Стиль">
        <ParamList>
          {filtres.styles.params.map((c, index) => (
            <ParamFilter key={index} id={c.id}>
              {c.name}
            </ParamFilter>
          ))}
        </ParamList>
      </ComboBox>
      <ComboBox text="Цена">
        <PriceBox />
      </ComboBox>
      <ComboBox text="Материал">
        <ParamList>
          {filtres.materials.params.map((c, index) => (
            <ParamFilter key={index} id={c.id}>
              {c.name}
            </ParamFilter>
          ))}
        </ParamList>
      </ComboBox>
      <ComboBox text="Цвет">
        <ParamList>
          {filtres.colors.params.map((c, index) => (
            <ParamFilter key={index} id={c.id} color={c.color}>
              {c.name}
            </ParamFilter>
          ))}
        </ParamList>
      </ComboBox> */}
    </div>
  )
}

export default Filters
