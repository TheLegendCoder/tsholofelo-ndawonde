import * as React from "react"
import { Button } from "./button"
import type { ButtonProps } from "./button"

interface EnhancedButtonProps extends ButtonProps {
  showRipple?: boolean
  pulseOnHover?: boolean
}

const EnhancedButton = React.forwardRef<
  HTMLButtonElement,
  EnhancedButtonProps
>(({ showRipple = true, pulseOnHover = false, className, ...props }, ref) => {
  const [ripples, setRipples] = React.useState<
    Array<{ id: number; x: number; y: number }>
  >([])
  const rippleIdRef = React.useRef(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!showRipple) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = rippleIdRef.current++

    setRipples((prev) => [...prev, { id, x, y }])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
    }, 600)

    props.onMouseDown?.(e)
  }

  const baseClassName = `relative overflow-hidden ${className || ""}`

  return (
    <Button
      ref={ref}
      className={baseClassName}
      onMouseDown={handleMouseDown}
      {...props}
    >
      {/* Ripple effects */}
      {showRipple &&
        ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute animate-ripple rounded-full bg-white/30 pointer-events-none"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: "10px",
              height: "10px",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

      {/* Pulse overlay on hover */}
      {pulseOnHover && (
        <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
      )}

      {/* Content */}
      <span className="relative z-10" style={{} as React.CSSProperties}>{props.children}</span>
    </Button>
  )
})

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton }
