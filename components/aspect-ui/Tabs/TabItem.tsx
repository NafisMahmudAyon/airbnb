'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useTabs } from './TabsContext'

interface TabItemProps {
  children: ReactNode
  id: string
  disabled?: boolean
  className?: string
  activeClassName?: string
  disabledClassName?: string
  onClick?: () => void
}

export const TabItem: React.FC<TabItemProps> = ({
  children,
  id,
  disabled,
  className = '',
  activeClassName = '',
  disabledClassName = '',
  onClick,
  ...rest
}) => {
  const { activeTab, setActiveTab } = useTabs()
  const isActive = activeTab === id
  console.log(isActive)
  return (
    <button
      className={cn(
        'whitespace-nowrap text-sm font-medium pb-3 rounded-none border-b-2 border-transparent',
        isActive
          ? cn('border-b-2 border-text', activeClassName)
          : disabled && cn('pointer-events-none opacity-50', disabledClassName),
        className
      )}
      onClick={() => {
        if (!disabled) {
          setActiveTab(id)
          onClick?.()
        }
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
