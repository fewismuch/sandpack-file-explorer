import React from 'react'

export const CollapseIcon = () => (
  <svg viewBox='0 0 1024 1024' width='1em' height='1em' fill='currentColor'>
    <path d='M474.88 680.96c20.48-20.48 53.76-20.48 74.24 0l254.6688 253.5936c20.5312 20.48 20.5312 53.6064 0 74.0864-20.48 20.48-53.76 20.48-74.24 0L512 792.1152l-217.5488 216.576c-20.48 20.4288-53.76 20.4288-74.24 0-20.5312-20.48-20.5312-53.7088 0-74.1376zM294.4 15.36L512 231.8848l217.5488-216.576c20.48-20.4288 53.76-20.4288 74.24 0 20.5312 20.48 20.5312 53.7088 0 74.1376L549.12 343.04c-20.48 20.48-53.76 20.48-74.24 0L220.16 89.4464C199.68 68.9664 199.68 35.84 220.16 15.36c20.48-20.48 53.76-20.48 74.24 0z'></path>
  </svg>
)

const IconMap = {
  collapse: <CollapseIcon />,
}

interface IIcons {
  name: keyof typeof IconMap
  style?: {
    color?: string
    fontSize?: string | number
  }

  [key: string]: any
}

export const Icons: React.FC<IIcons> = (props) => {
  const { style, name, ...rest } = props
  return (
    <span {...rest} style={{ display: 'flex', alignItems: 'center', ...style }}>
      {IconMap[name]}
    </span>
  )
}
