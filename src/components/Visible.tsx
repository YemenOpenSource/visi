import React from 'react'

type VisibleProps<T> = {
  when: T | undefined | null | boolean,
  fallback?: React.ReactNode,
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export default function Visible<T>({ when, fallback = null, children }: VisibleProps<T>): React.ReactNode {
  if (!when) {
    return fallback
  }

  // typeof children equals 'ReactNode' or 'function'
  if (typeof children === 'function') {
    return (children as (item: T) => React.ReactNode)(when as T)
  }
  return when ? children : fallback
}