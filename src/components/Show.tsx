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

  // children has two types
  // typeof children(item) === 'function'
  // typeof children === React.ReactNode


  // the following condition apply the process for the 'function' type
  // Purpose: This casts the children prop to be treated as a function with the signature (item: T) => ReactNode.
  // Reason for Casting: Since children can be either a ReactNode 
  // (e.g., JSX.Element) or a function that accepts a parameter of type T 
  // and returns a ReactNode, TypeScript cannot know for sure which one
  // it is without additional checks or casting. By explicitly casting 
  // children to a function, you're telling TypeScript that
  // "I know this is a function in this specific case."
  if (typeof children === 'function') {
    return (children as (item: T) => React.ReactNode)(when as T)
  }
  return when ? children : fallback
}