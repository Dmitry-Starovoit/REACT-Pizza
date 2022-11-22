import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader className="pizza-block" 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="272" rx="14" ry="14" width="275" height="24" /> 
    <rect x="1" y="311" rx="14" ry="14" width="274" height="87" /> 
    <rect x="3" y="424" rx="14" ry="14" width="80" height="35" /> 
    <rect x="119" y="418" rx="30" ry="30" width="157" height="48" /> 
    <circle cx="141" cy="130" r="130" /> 
    <circle cx="173" cy="142" r="18" />
  </ContentLoader>
)

export default Skeleton;