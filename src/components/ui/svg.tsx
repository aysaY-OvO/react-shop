import React from "react"

interface IconPropTypes {
  name: string,
  width: number,
  height: number
}

export const Icon = ({name, width, height}: IconPropTypes) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <use xlinkHref={`/spritemap.svg#${name}`} />
    </svg>
  )
}
