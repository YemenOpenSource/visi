export type MatchProps<T> = {
  when: T | undefined | null | boolean,
  children: React.ReactNode | ((item: T) => React.ReactNode),
}

export default function Match<T>({ when, children }: MatchProps<T>): React.ReactNode {
  if (!when) {
    return null
  }

  if (typeof children === 'function') {
    return (children as (item: T) => React.ReactNode)(when as T)
  }

  return children
}
