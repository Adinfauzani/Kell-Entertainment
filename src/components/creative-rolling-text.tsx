"use client"

import { useState, useEffect } from "react"
import { RollingText } from "@animate-ui/react/primitives/texts/rolling"

const creativeItems = ["Podcast", "Serial Video", "Produksi Kreatif", "Kolaborasi"]

export function CreativeRollingText() {
  const [creativeIndex, setCreativeIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCreativeIndex((i) => (i + 1) % creativeItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return <RollingText key={creativeIndex} text={creativeItems[creativeIndex]} inView />
}
