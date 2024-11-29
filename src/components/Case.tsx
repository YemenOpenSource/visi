export type CaseProps<T> = {
  when: T | undefined | null | boolean,
  children: React.ReactNode | ((item: T) => React.ReactNode),
}

export default function Case<T>({ when, children }: CaseProps<T>): React.ReactNode {
  if (!when) {
    return null
  }

  if (typeof children === 'function') {
    return (children as (item: T) => React.ReactNode)(when as T)
  }

  return children
}
