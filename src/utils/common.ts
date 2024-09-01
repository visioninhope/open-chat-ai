/**
 * @description 判断是否是IOS设备
 * @returns boolean
 */
const isIOSDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

/**
 * @description 判断访客是否在微信内置浏览器打开网页
 * @returns boolean
 */
const isWeChatBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return /micromessenger/.test(userAgent)
}

/**
 * @description 处理移动端软键盘弹起不回弹问题
 */
const adjustPageAfterKeyboard = () => {
  const dummyInput = document.createElement('input')
  dummyInput.style.position = 'absolute'
  dummyInput.style.top = '-1000px'
  document.body.appendChild(dummyInput)

  dummyInput.focus()
  setTimeout(() => {
    dummyInput.blur()
    document.body.removeChild(dummyInput)
  }, 200)
}

/**
 * @description 兼容微信浏览器，IOS键盘唤起，键盘收起以后页面不归位，兼容微信浏览器，安卓设备密码输入框失去焦点后键盘收起页面不归为问题
 *
 */
const handleKeyBoardInWeChat = (inputType: string) => {
  if (isIOSDevice() && isWeChatBrowser()) {
    adjustPageAfterKeyboard()
  } else if (isWeChatBrowser() && inputType === 'password') {
    adjustPageAfterKeyboard()
  }
}

function throttle<T extends () => void>(func: T, limit: number): T {
  let lastFunc: ReturnType<typeof setTimeout>
  let lastRan: number

  return ((...args) => {
    if (!lastRan) {
      func(...args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func(...args)
            lastRan = Date.now()
          }
        },
        limit - (Date.now() - lastRan),
      )
    }
  }) as T
}

function debounce<T extends () => void>(
  func: T,
  delay: number = 500,
  immediate = false,
) {
  let timer: NodeJS.Timeout | null

  return function (...reset: []) {
    timer && clearTimeout(timer)

    if (immediate) {
      !timer && func(...reset)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    } else {
      timer = setTimeout(() => {
        func(...reset)
      }, delay)
    }
  }
}

export { handleKeyBoardInWeChat, throttle, debounce }
