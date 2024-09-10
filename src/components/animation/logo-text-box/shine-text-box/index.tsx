import { FC, useEffect, useState } from 'react'

import styles from './index.module.scss'

interface IProps {
  text: string
  animationColor?: string
  textStrokeColor?: string
}

const ShineTextBox: FC<IProps> = ({
  text,
  animationColor = '#201f1e',
  textStrokeColor = '#D9D9E3',
}) => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true)
    }, 50)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      style={
        {
          '--animation-color': animationColor,
          '--text-stroke-color': textStrokeColor,
        } as React.CSSProperties
      }
      data-text="Awesome"
    >
      <span>&nbsp;{text}&nbsp;</span>
      <span aria-hidden="true" className={`${styles['hover-text']}`}>
        &nbsp;{text}&nbsp;
      </span>
    </button>
  )
}

export default ShineTextBox
