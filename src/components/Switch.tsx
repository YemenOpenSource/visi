import React, { isValidElement } from 'react'
import Match from './Match'

type SwitchProps = {
  fallback?: React.ReactNode,
  children: React.ReactNode,
}

export default function Switch({ fallback = null, children }: SwitchProps) {
  const childrenArray: React.ReactNode[] = React.Children.toArray(children)

  for (const element of childrenArray) {
    if (isValidElement(element) && element.props.when && element.type === Match) {
      return element
    }
  }

  return fallback
}