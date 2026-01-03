import * as React from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  hoverScale?: number
  parallax?: boolean
  glow?: boolean
}

const AnimatedImage = React.forwardRef<
  HTMLImageElement,
  AnimatedImageProps
>(
  (
    {
      className,
      hoverScale = 1.05,
      parallax = false,
      glow = false,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [offset, setOffset] = React.useState(0)
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (!parallax) return

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setOffset(y * 10)
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [parallax])

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden rounded-lg",
          glow && "before:absolute before:inset-0 before:rounded-lg before:pointer-events-none before:transition-shadow before:duration-300 hover:before:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]"
        )}
      >
        <Image
          ref={ref}
          className={cn(
            "transition-all duration-500 ease-out",
            `hover:scale-[${hoverScale}]`,
            isLoading ? "scale-110 blur-sm" : "scale-100 blur-0",
            className
          )}
          onLoadingComplete={() => setIsLoading(false)}
          style={
            parallax
              ? { transform: `translateY(${offset}px)` } as React.CSSProperties
              : undefined
          }
          {...props}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20 animate-skeleton-pulse" />
        )}
      </div>
    )
  }
)

AnimatedImage.displayName = "AnimatedImage"

export { AnimatedImage }
