import * as React from "react"
import { cn } from "@/lib/utils"
import styles from "./stagger.module.css"

interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  staggerChildren?: boolean
  delayChildren?: number
  variant?: "fade" | "slide-up" | "bounce" | "cascade"
}

const StaggerContainer = React.forwardRef<
  HTMLDivElement,
  StaggerContainerProps
>(
  (
    {
      className,
      staggerChildren = true,
      delayChildren = 0,
      variant = "cascade",
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useLayoutEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--stagger-children", staggerChildren ? "1" : "0")
        containerRef.current.style.setProperty("--delay-children", `${delayChildren}ms`)
      }
    }, [staggerChildren, delayChildren])

    return (
      <div
        ref={containerRef}
        className={cn(
          styles.staggerContainer,
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child

          const variantMap = {
            fade: "fade-in",
            "slide-up": "bounce-up",
            bounce: "bounce-in",
            cascade: "cascade-in",
          }

          return React.cloneElement(child as React.ReactElement<any>, {
            className: cn(
              child.props.className,
              `animate-${variantMap[variant]}`,
              staggerChildren && `[animation-delay:${delayChildren + index * 100}ms]`
            ),
          })
        })}
      </div>
    )
  }
)

StaggerContainer.displayName = "StaggerContainer"

const StaggerItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "fade" | "slide-up" | "bounce" | "cascade"
  }
>(({ className, variant = "cascade", ...props }, ref) => {
  const variantMap = {
    fade: "fade-in",
    "slide-up": "bounce-up",
    bounce: "bounce-in",
    cascade: "cascade-in",
  }

  return (
    <div
      ref={ref}
      className={cn(`animate-${variantMap[variant]}`, className)}
      {...props}
    />
  )
})

StaggerItem.displayName = "StaggerItem"

export { StaggerContainer, StaggerItem }
