import { FC } from 'react'

import styles from './index.module.scss'

interface IProps {
  text: string
  textColor?: string
  textBeforeColor?: string
  textAfterColor?: string
}

const ShimmeringTextBox: FC<IProps> = ({
  text,
  textColor = '#fff',
  textBeforeColor = '#8b00ff',
  textAfterColor = '#00e571',
}) => {
  return (
    <div
      className={styles.container}
      style={
        {
          '--text-color': textColor,
          '--text-before-color': textBeforeColor,
          '--text-after-color': textAfterColor,
        } as React.CSSProperties
      }
    >
      <div data-glitch={text} className={`${styles.glitch}`}>
        {text}
      </div>
    </div>
  )
}

export default ShimmeringTextBox
