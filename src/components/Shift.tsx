import React, { isValidElement } from 'react'
import Case from './Case'

type ShiftProps = {
  fallback?: React.ReactNode,
  children: React.ReactNode,
}


export default function Shift({ fallback = null, children }: ShiftProps) {
  // strongly convert to array
  const childrenArray: React.ReactNode[] = React.Children.toArray(children)

  for (const element of childrenArray) {
    if (isValidElement(element) && element.props.when && element.type === Case) {
      return element
    }
  }

  return fallback
}