import React, { isValidElement } from 'react'
import Match from './Match'

type SwitchProps = {
  fallback?: React.ReactNode,
  children: React.ReactNode,
}


// export default function Switch(props: SwitchProps) {
//   console.log('switch children prop', props.children)
//   let children: React.ReactNode | React.ReactNode[] = props.children
//   console.log(typeof props.children)

//   if (!Array.isArray(children)) {
//     children = [children]

//     console.log(children)
//   }
//   console.log('scope log children', children[0])

//   for (const element of children) {
//     const child = element;
//     if (child.props.when) {
//       return child
//     }
//   }

//   return props.fallback
// }

export default function Switch({ fallback = null, children }: SwitchProps) {
  // for testing
  // console.log('switch children prop', children)

  // strongly convert to array
  // this scenario helps if there is only single children
  const childrenArray: React.ReactNode[] = React.Children.toArray(children)

  // for testing
  // console.log('type of switch children', typeof children)
  // console.log('type of switch childrenArray', typeof childrenArray)

  // for testing
  // console.log('scope log children', children)
  // console.log('scope log childrenArray', childrenArray)

  // loop the array of children
  for (const element of childrenArray) {
    //check if it's valid react element
    //check if the element when prop is not undefined
    //check if the element type exactly is Match component
    //note: if the type !== Match it will return the fallback
    if (isValidElement(element) && element.props.when && element.type === Match) {
      return element
    }
  }

  return fallback
}