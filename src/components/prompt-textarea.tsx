import { useRef, useEffect, FC, TextareaHTMLAttributes } from 'react'

import clsx from 'clsx'

interface PromptTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows?: number
  maxRows?: number
  className?: string
  onEnterPress?: () => void
}

const PromptTextarea: FC<PromptTextareaProps> = ({
  minRows = 1,
  maxRows = 6,
  className = '',
  onEnterPress,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current

    const calculateHeight = () => {
      if (textarea) {
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10)
        const padding =
          parseInt(getComputedStyle(textarea).paddingTop, 10) +
          parseInt(getComputedStyle(textarea).paddingBottom, 10)

        // Reset height to auto to calculate the scrollHeight correctly
        textarea.style.height = 'auto'

        // Calculate the height based on scrollHeight and lineHeight
        const newHeight = Math.min(
          Math.max(textarea.scrollHeight, minRows * lineHeight + padding),
          maxRows * lineHeight + padding,
        )

        // Apply the calculated height
        textarea.style.height = `${newHeight}px`
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          // Allow line break with Shift + Enter
          return
        }
        // Prevent default Enter behavior
        event.preventDefault()
        // Call the onEnterPress callback if provided
        onEnterPress?.()
      }
    }

    // Attach the calculateHeight function to the input event
    textarea?.addEventListener('input', calculateHeight)
    textarea?.addEventListener('keydown', handleKeyDown)

    // Initial height adjustment
    calculateHeight()

    // Cleanup event listener on component unmount
    return () => {
      textarea?.removeEventListener('input', calculateHeight)
      textarea?.removeEventListener('keydown', handleKeyDown)
    }
  }, [minRows, maxRows, onEnterPress])

  return (
    <textarea
      ref={textareaRef}
      rows={minRows}
      className={clsx(
        'w-full resize-none overflow-hidden border-none bg-transparent p-0 focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}

export default PromptTextarea
