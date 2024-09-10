'use client'

import { FC, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import ShimmeringTextBox from './shimmering-text-box'
import ShineTextBox from './shine-text-box'

// 仅业务层面组件封装考虑
interface IProps {
  type?: 'shine' | 'shimmering'
}

const LogoTextBox: FC<IProps> = ({ type = 'shine' }) => {
  const { theme } = useTheme()
  const [isVisible, setiIsVisible] = useState(false)

  useEffect(() => {
    setiIsVisible(true)
  }, [])

  if (!isVisible) {
    return null
  }

  switch (type) {
    case 'shine':
      return (
        <ShineTextBox
          text="ChatAiGPT"
          animationColor={theme === 'light' ? '#201f1e' : '#37FF8B'}
        />
      )
    case 'shimmering':
      return (
        <ShimmeringTextBox
          text="ChatAiGPT"
          textColor={theme === 'light' ? '#000000' : '#fff'}
          textBeforeColor={theme === 'light' ? '#d2d0ce' : '#8b00ff'}
          textAfterColor={theme === 'light' ? '#a80000' : '#00e571'}
        />
      )
    default:
      break
  }
}

export default LogoTextBox
