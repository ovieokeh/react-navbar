import { useState, useEffect } from 'react'

const useScrollSlide = () => {
  const pos = typeof window !== 'undefined' ? window.pageYOffset : 0

  const [isHidden, setHidden] = useState(false)
  const [prevPos, setPrevPos] = useState(pos)

  useEffect(() => {
    const handleScroll = () => {
      const curPos = window.pageYOffset
      const isScrollingDown = prevPos > curPos

      isScrollingDown && isHidden && setHidden(false)

      !isScrollingDown && !isHidden && setHidden(true)

      setPrevPos(curPos)
    }

    window && window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevPos])

  return isHidden
}

export default useScrollSlide
