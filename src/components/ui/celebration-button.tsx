'use client';

import * as React from "react"
import { EnhancedButton } from "./button-enhanced"
import type { ButtonProps } from "./button"
import { triggerCelebrationFrom } from "@/lib/utils"

interface CelebrationButtonProps extends ButtonProps {
  showRipple?: boolean
  pulseOnHover?: boolean
  celebrateOnClick?: boolean
  celebrationIntensity?: 'low' | 'medium' | 'high'
  onCelebrate?: () => void
}

const CelebrationButton = React.forwardRef<
  HTMLButtonElement,
  CelebrationButtonProps
>(({ 
  celebrateOnClick = false, 
  celebrationIntensity = 'medium',
  onCelebrate,
  onClick,
  className,
  ...props 
}, ref) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (celebrateOnClick && buttonRef.current) {
      // Trigger confetti from button location
      triggerCelebrationFrom(buttonRef.current, { intensity: celebrationIntensity });
      
      // Add pulse-glow animation
      buttonRef.current.classList.add('animate-pulse-glow');
      setTimeout(() => {
        buttonRef.current?.classList.remove('animate-pulse-glow');
      }, 600);

      // Call custom celebrate handler
      onCelebrate?.();
    }

    // Call original onClick
    onClick?.(e);
  };

  // Merge refs
  React.useImperativeHandle(ref, () => buttonRef.current!);

  return (
    <EnhancedButton
      ref={buttonRef}
      className={className}
      onClick={handleClick}
      {...props}
    />
  )
})

CelebrationButton.displayName = "CelebrationButton"

export { CelebrationButton }
