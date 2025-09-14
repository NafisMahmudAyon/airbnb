'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TabListProps {
  children: ReactNode
  className?: string
}

export const TabList: React.FC<TabListProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'text-text mb-4 inline-flex items-center  rounded-md border-b border-[#DDDDDD]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
