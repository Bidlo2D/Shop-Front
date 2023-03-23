import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
  <ContentLoader
    className="item"
    speed={2}
    width={300}
    height={375}
    viewBox="0 0 300 375"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="14" rx="0" ry="0" width="260" height="260" />
    <rect x="15" y="285" rx="0" ry="0" width="260" height="50" />
    <rect x="15" y="345" rx="0" ry="0" width="260" height="18" />
  </ContentLoader>
)

export default ProductSkeleton
