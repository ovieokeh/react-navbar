import { useState, useEffect } from 'react'

export const useScrollSlide = (
  height: string | undefined = '55px',
  shouldScroll: boolean
) => {
  const pos = typeof window !== 'undefined' ? window.pageYOffset : 0
  const [isHidden, setHidden] = useState(false)
  const [prevPos, setPrevPos] = useState(pos)

  const navHeight = getNumber(height)

  useEffect(() => {
    if (shouldScroll === false) return

    const handleScroll = () => {
      const curPos = window.pageYOffset
      const posDifference = prevPos - curPos

      if (curPos <= navHeight) return setHidden(false)

      posDifference > navHeight && isHidden && setHidden(false)
      posDifference < -navHeight && !isHidden && setHidden(true)

      if (Math.abs(posDifference) > navHeight) setPrevPos(curPos)
    }

    window && window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHidden, navHeight, setHidden, setPrevPos, shouldScroll, prevPos])

  return isHidden
}

export const useNoScroll = (shouldScroll: boolean) =>
  useEffect(() => {
    if (shouldScroll) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [shouldScroll])

export const computeClass = (
  shouldAnimate: boolean,
  cond: boolean,
  alternate: string,
  baseAlternate: string,
  main: string
): string[] => {
  const otherClassnames: string[] = []

  if (shouldAnimate) {
    !!cond
      ? otherClassnames.push(alternate)
      : otherClassnames.push(baseAlternate)
  } else {
    !!cond && otherClassnames.push(main)
  }

  return otherClassnames
}

export const getNumber = (str: string): number => {
  let number = ''

  Array.from(str).forEach(char => {
    if (Number.isInteger(+char)) number += char
  })

  return +number
}
