import React from 'react'

import { Icon } from './svg'

interface ButtonPropTypes {
  icon: string,
  width: number,
  height: number,
  text?: string,
  handler?: () => void
}

export default function Button({icon, width, height, text, handler}: ButtonPropTypes) {
  return (
    <button type='button' onClick={handler}>
      {text ? text : ''}
      <Icon name={icon} width={width} height={height} />
    </button>
  )
}
