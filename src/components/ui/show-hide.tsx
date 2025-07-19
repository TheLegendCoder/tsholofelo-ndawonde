"use client"

import * as React from "react"
import { useResponsive } from "@/hooks/use-responsive"

interface ShowHideProps {
  children: React.ReactNode
  above?: "sm" | "md" | "lg" | "xl" | "2xl"
  below?: "sm" | "md" | "lg" | "xl" | "2xl"
  only?: "mobile" | "tablet" | "desktop"
}

/**
 * Conditionally render children based on screen size
 * 
 * @example
 * // Show only on desktop
 * <ShowHide above="lg">Desktop content</ShowHide>
 * 
 * // Show only on mobile
 * <ShowHide below="md">Mobile content</ShowHide>
 * 
 * // Show only on tablet
 * <ShowHide only="tablet">Tablet content</ShowHide>
 */
export function ShowHide({ children, above, below, only }: ShowHideProps) {
  const { isSm, isMd, isLg, isXl, is2xl, isMobile, isTablet, isDesktop } = useResponsive()

  let shouldShow = true

  if (only) {
    switch (only) {
      case "mobile":
        shouldShow = isMobile
        break
      case "tablet":
        shouldShow = isTablet
        break
      case "desktop":
        shouldShow = isDesktop
        break
    }
  } else {
    if (above) {
      switch (above) {
        case "sm":
          shouldShow = shouldShow && isSm
          break
        case "md":
          shouldShow = shouldShow && isMd
          break
        case "lg":
          shouldShow = shouldShow && isLg
          break
        case "xl":
          shouldShow = shouldShow && isXl
          break
        case "2xl":
          shouldShow = shouldShow && is2xl
          break
      }
    }

    if (below) {
      switch (below) {
        case "sm":
          shouldShow = shouldShow && !isSm
          break
        case "md":
          shouldShow = shouldShow && !isMd
          break
        case "lg":
          shouldShow = shouldShow && !isLg
          break
        case "xl":
          shouldShow = shouldShow && !isXl
          break
        case "2xl":
          shouldShow = shouldShow && !is2xl
          break
      }
    }
  }

  if (!shouldShow) {
    return null
  }

  return <>{children}</>
}

/**
 * Hook for conditional rendering based on screen size
 * 
 * @example
 * const { showOnMobile, showOnTablet, showOnDesktop } = useShowHide()
 * 
 * return (
 *   <>
 *     {showOnMobile && <MobileComponent />}
 *     {showOnTablet && <TabletComponent />}
 *     {showOnDesktop && <DesktopComponent />}
 *   </>
 * )
 */
export function useShowHide() {
  const responsive = useResponsive()

  return {
    showOnMobile: responsive.isMobile,
    showOnTablet: responsive.isTablet,
    showOnDesktop: responsive.isDesktop,
    showAboveSm: responsive.isSm,
    showAboveMd: responsive.isMd,
    showAboveLg: responsive.isLg,
    showAboveXl: responsive.isXl,
    showAbove2xl: responsive.is2xl,
    showBelowSm: !responsive.isSm,
    showBelowMd: !responsive.isMd,
    showBelowLg: !responsive.isLg,
    showBelowXl: !responsive.isXl,
    showBelow2xl: !responsive.is2xl,
    ...responsive
  }
}
