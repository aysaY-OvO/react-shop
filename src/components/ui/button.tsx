import { Icon } from './svg'

export default function Button({icon, width, height, text, handler}) {
  return (
    <button type='button' onClick={handler ? handler : null}>
      {text ? text : ''}
      <Icon name={icon} width={width} height={height} />
    </button>
  )
}
