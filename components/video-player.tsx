"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, X } from "lucide-react"

export default function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 350 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isEnlarged, setIsEnlarged] = useState(false)

  // Toggle mute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Hide video (slide to left)
  const hideVideo = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVisible(false)

    // After animation completes, reset position for when it becomes visible again
    setTimeout(() => {
      if (!isVisible && videoRef.current) {
        videoRef.current.muted = true
        setIsMuted(true)
      }
    }, 300)
  }

  // Show video again
  const showVideo = () => {
    setIsVisible(true)
  }

  // Start dragging
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

  // Handle dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y

      // Ensure video stays within viewport
      const maxX = window.innerWidth - containerRef.current.offsetWidth
      const maxY = window.innerHeight - containerRef.current.offsetHeight

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      })
    }
  }

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add and remove event listeners
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

  // Start playing video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  // Toggle enlarged state when clicking on video
  const toggleSize = () => {
    setIsEnlarged(!isEnlarged)
  }

  // Calculate video dimensions - 9:16 aspect ratio with enlargement
  const baseWidth = 160
  const videoWidth = isEnlarged ? baseWidth * 1.5 : baseWidth
  const videoHeight = (videoWidth * 16) / 9

  // Responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Smaller size for mobile
        setPosition((prev) => ({
          x: Math.min(prev.x, window.innerWidth - 120),
          y: Math.min(prev.y, window.innerHeight - 200),
        }))
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call once on mount

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Main video container */}
      <div
        ref={containerRef}
        className={`fixed z-30 cursor-move shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-[-95%]"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${videoWidth}px`,
          height: `${videoHeight}px`,
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="relative bg-black h-full">
          {/* Video with 9:16 aspect ratio - always playing */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/videocha1.mp4"
            poster="/video-thumbnail.jpg"
            muted={isMuted}
            loop
            autoPlay
            playsInline
            onClick={toggleSize}
          />

          {/* Controls overlay */}
          <div className="absolute top-0 right-0 p-1 flex gap-1">
            {/* Volume control */}
            <button
              onClick={toggleMute}
              className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            {/* Close button */}
            <button
              onClick={hideVideo}
              className="w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-black"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Show button when video is hidden */}
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

