import { useState, useEffect, FC, ReactNode, useRef } from 'react'

import clsx from 'clsx'

import styles from './container.module.scss'

// 自定义面板容器，核心是封装出场效果，一定要搭配具体的pannel内组件进行展示，childern属性不能为空

interface IProps {
  children: ReactNode
  visible?: boolean
}

const Pannel: FC<IProps> = ({ children, visible = false }) => {
  const [enter, setEnter] = useState(false)
  const [leave, setLeave] = useState(false)

  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (visible) {
      setEnter(true)
      timeout.current = setTimeout((): void => {
        setEnter(false)
      }, 300)
    } else {
      setLeave(true)
      timeout.current = setTimeout((): void => {
        setLeave(false)
      }, 300)
    }
    return (): void => {
      timeout.current = undefined
    }
  }, [visible])

  return visible ? (
    <div
      className={clsx(styles.pannel, {
        [styles.enter]: enter,
        [styles.leave]: leave,
      })}
    >
      {children}
    </div>
  ) : (
    <></>
  )
}

export default Pannel
