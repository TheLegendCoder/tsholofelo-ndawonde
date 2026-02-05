import * as React from "react"
import styles from "./ripple.module.css"

interface RippleProps {
  ripples: Array<{ id: number; x: number; y: number }>
  showRipple: boolean
}

export const RippleContainer = ({ ripples, showRipple }: RippleProps) => {
  if (!showRipple) return null

  return (
    <div className={styles.container}>
      {ripples.map((ripple) => (
        <RippleElement key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
    </div>
  )
}

interface RippleElementProps {
  x: number
  y: number
}

const RippleElement = ({ x, y }: RippleElementProps) => {
  const divRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.left = `${x}px`
      divRef.current.style.top = `${y}px`
    }
  }, [x, y])

  return <div ref={divRef} className={styles.ripple} />
}
