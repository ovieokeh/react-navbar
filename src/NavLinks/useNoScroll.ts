import { useEffect } from 'react'

const useNoScroll = (shouldScroll: boolean) =>
  useEffect(() => {
    if (shouldScroll) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [shouldScroll])

export default useNoScroll
