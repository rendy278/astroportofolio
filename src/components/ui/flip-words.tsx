'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  // ⛔ Hilangkan animasi pada render pertama
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation()
      }, duration)
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        initial={
          isMounted
            ? { opacity: 0, y: 10 } // animasi hanya setelah mount
            : false // ⛔ nonaktifkan animasi awal
        }
        animate={isMounted ? { opacity: 1, y: 0 } : false}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          'z-10 inline-block font-bold relative text-left',
          className,
        )}
        key={currentWord}
      >
        {currentWord.split(' ').map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={
              isMounted ? { opacity: 0, y: 10, filter: 'blur(8px)' } : false
            }
            animate={
              isMounted ? { opacity: 1, y: 0, filter: 'blur(0px)' } : false
            }
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={
                  isMounted ? { opacity: 0, y: 10, filter: 'blur(8px)' } : false
                }
                animate={
                  isMounted ? { opacity: 1, y: 0, filter: 'blur(0px)' } : false
                }
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
