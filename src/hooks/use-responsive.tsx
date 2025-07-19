"use client"

import * as React from "react"

// Tailwind CSS breakpoints
const breakpoints = {
  sm: 640,   // @media (min-width: 640px)
  md: 768,   // @media (min-width: 768px)
  lg: 1024,  // @media (min-width: 1024px)
  xl: 1280,  // @media (min-width: 1280px)
  '2xl': 1536, // @media (min-width: 1536px)
} as const

type Breakpoint = keyof typeof breakpoints

export function useBreakpoint(breakpoint: Breakpoint) {
  const [matches, setMatches] = React.useState<boolean>(false)
  const [hasMounted, setHasMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setHasMounted(true)
    
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`)
    
    const onChange = () => {
      setMatches(mediaQuery.matches)
    }
    
    // Set initial value
    setMatches(mediaQuery.matches)
    
    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [breakpoint])

  // Return false during SSR to prevent hydration mismatch
  if (!hasMounted) {
    return false
  }

  return matches
}

export function useResponsive() {
  const [screenSize, setScreenSize] = React.useState<{
    width: number
    height: number
    isSm: boolean
    isMd: boolean
    isLg: boolean
    isXl: boolean
    is2xl: boolean
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
  }>({
    width: 0,
    height: 0,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
    isMobile: true, // Default to mobile for SSR
    isTablet: false,
    isDesktop: false,
  })
  const [hasMounted, setHasMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setHasMounted(true)
    
    const updateSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      const newScreenSize = {
        width,
        height,
        isSm: width >= breakpoints.sm,
        isMd: width >= breakpoints.md,
        isLg: width >= breakpoints.lg,
        isXl: width >= breakpoints.xl,
        is2xl: width >= breakpoints['2xl'],
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
      }
      
      setScreenSize(newScreenSize)
    }
    
    updateSize()
    window.addEventListener('resize', updateSize)
    
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Return mobile-first defaults during SSR
  if (!hasMounted) {
    return {
      width: 0,
      height: 0,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: false,
      is2xl: false,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    }
  }

  return screenSize
}
