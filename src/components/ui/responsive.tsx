"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

export function ResponsiveContainer({ 
  maxWidth = "xl", 
  padding = "md", 
  className, 
  children, 
  ...props 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md", 
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full"
  }

  const paddingClasses = {
    none: "",
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-6 sm:px-8 lg:px-12",
    xl: "px-8 sm:px-12 lg:px-16"
  }

  return (
    <div 
      className={cn(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

export function ResponsiveGrid({ 
  cols = { default: 1, sm: 2, lg: 3 }, 
  gap = "md", 
  className, 
  children, 
  ...props 
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8", 
    xl: "gap-12"
  }

  const getGridCols = () => {
    const classes: string[] = []
    
    if (cols.default) classes.push(`grid-cols-${cols.default}`)
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)
    
    return classes.join(" ")
  }

  return (
    <div 
      className={cn(
        "grid",
        getGridCols(),
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ResponsiveStackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  direction?: {
    default?: "row" | "col"
    sm?: "row" | "col"
    md?: "row" | "col"
    lg?: "row" | "col"
  }
  children: React.ReactNode
}

export function ResponsiveStack({ 
  spacing = "md", 
  align = "start",
  direction = { default: "col" },
  className, 
  children, 
  ...props 
}: ResponsiveStackProps) {
  const spacingClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  }

  const alignClasses = {
    start: "items-start",
    center: "items-center", 
    end: "items-end",
    stretch: "items-stretch"
  }

  const getDirectionClasses = () => {
    const classes: string[] = ["flex"]
    
    if (direction.default === "row") classes.push("flex-row")
    else classes.push("flex-col")
    
    if (direction.sm === "row") classes.push("sm:flex-row")
    else if (direction.sm === "col") classes.push("sm:flex-col")
    
    if (direction.md === "row") classes.push("md:flex-row")
    else if (direction.md === "col") classes.push("md:flex-col")
    
    if (direction.lg === "row") classes.push("lg:flex-row")
    else if (direction.lg === "col") classes.push("lg:flex-col")
    
    return classes.join(" ")
  }

  return (
    <div 
      className={cn(
        getDirectionClasses(),
        spacingClasses[spacing],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ResponsiveTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  size?: {
    default?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
    sm?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
    md?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
    lg?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
  }
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"
  align?: {
    default?: "left" | "center" | "right"
    sm?: "left" | "center" | "right"
    md?: "left" | "center" | "right"
    lg?: "left" | "center" | "right"
  }
  children: React.ReactNode
}

export function ResponsiveText({
  as: Component = "p",
  size = { default: "base" },
  weight = "normal",
  align = { default: "left" },
  className,
  children,
  ...props
}: ResponsiveTextProps) {
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold"
  }

  const getSizeClasses = () => {
    const classes: string[] = []
    
    if (size.default) classes.push(`text-${size.default}`)
    if (size.sm) classes.push(`sm:text-${size.sm}`)
    if (size.md) classes.push(`md:text-${size.md}`)
    if (size.lg) classes.push(`lg:text-${size.lg}`)
    
    return classes.join(" ")
  }

  const getAlignClasses = () => {
    const classes: string[] = []
    
    if (align.default) classes.push(`text-${align.default}`)
    if (align.sm) classes.push(`sm:text-${align.sm}`)
    if (align.md) classes.push(`md:text-${align.md}`)
    if (align.lg) classes.push(`lg:text-${align.lg}`)
    
    return classes.join(" ")
  }

  return (
    <Component
      className={cn(
        getSizeClasses(),
        weightClasses[weight],
        getAlignClasses(),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
