"use client"

import React, { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, X } from "lucide-react"

export default function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isEnlarged, setIsEnlarged] = useState(false)

  const baseWidth = 160
  const videoWidth = isEnlarged ? baseWidth * 1.5 : baseWidth
  const videoHeight = (videoWidth * 16) / 9

  // Har sahifa yangilanganda 2 soniyada chiqishi
  useEffect(() => {
    const bottomOffset = 20
    const fixedHeight = (baseWidth * 16) / 9
    const showTimeout = setTimeout(() => {
      setPosition({
        x: 20,
        y: window.innerHeight - fixedHeight - bottomOffset,
      })
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(showTimeout)
  }, [])

  // Video yuklanganda autoplay qilish
  useEffect(() => {
    if (isVisible && videoRef.current) {
      const video = videoRef.current
      video.muted = true
      video
        .play()
        .then(() => console.log("Video autoplay success"))
        .catch((err) => console.error("Autoplay error:", err))
    }
  }, [isVisible])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const hideVideo = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVisible(false)
  }

  const showVideo = () => {
    setIsVisible(true)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y

      const maxX = window.innerWidth - (containerRef.current?.offsetWidth || videoWidth)
      const maxY = window.innerHeight - (containerRef.current?.offsetHeight || videoHeight)

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const toggleSize = () => {
    setIsEnlarged(!isEnlarged)
  }

  return (
    <>
      {isVisible && (
        <div
          ref={containerRef}
          className="fixed z-30 cursor-move shadow-lg rounded-lg overflow-hidden transition-all duration-300"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${videoWidth}px`,
            height: `${videoHeight}px`,
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="relative bg-black h-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/video.mp4"
              muted
              loop
              playsInline
              onClick={toggleSize}
            />
            <div className="absolute top-0 right-0 p-1 flex gap-1">
              <button
                onClick={toggleMute}
                className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <button
                onClick={hideVideo}
                className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {!isVisible && (
        <button
          onClick={showVideo}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-r-lg z-30 hover:bg-black"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </>
  )
}
