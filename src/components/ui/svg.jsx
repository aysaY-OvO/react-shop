export const Icon = ({name, width, height}) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <use xlinkHref={`/spritemap.svg#${name}`} />
    </svg>
  )
}
