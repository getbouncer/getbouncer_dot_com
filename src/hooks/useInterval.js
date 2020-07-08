import { useEffect, useRef } from 'react'

export default function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      // eslint-disable-next-line prefer-const
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
