import React from 'react'

type ShowProps<T> = {
  when: T | undefined | null | boolean,
  fallback?: React.ReactNode,
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export default function Show<T>({ when, fallback = null, children }: ShowProps<T>): React.ReactNode {
  if (!when) {
    return fallback
  }

  if (typeof children === 'function') {
    return (children as (item: T) => React.ReactNode)(when as T)
  }
  return when ? children : fallback
}