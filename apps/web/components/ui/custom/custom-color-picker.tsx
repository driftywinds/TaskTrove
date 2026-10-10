"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CustomColorPickerProps {
  value: string
  onChange: (hex: string) => void
  onClear?: () => void
}

/**
 * Recovered Pro helper: hex string -> HSL (module 41745 `T6`).
 * Invalid input falls back to { h: 0, s: 0, l: 50 }.
 */
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!match || !match[1] || !match[2] || !match[3]) {
    return { h: 0, s: 0, l: 50 }
  }
  const r = parseInt(match[1], 16) / 255
  const g = parseInt(match[2], 16) / 255
  const b = parseInt(match[3], 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

/**
 * Recovered Pro helper: HSL -> hex string (module 41745 `T7`).
 */
function hslToHex(h: number, s: number, l: number): string {
  const sat = s / 100
  const lig = l / 100
  const c = (1 - Math.abs(lig * 2 - 1)) * sat
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lig - c / 2
  let r = 0
  let g = 0
  let b = 0
  if (h >= 0 && h < 60) {
    r = c
    g = x
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
  } else if (h >= 120 && h < 180) {
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    b = c
  } else if (h >= 300 && h < 360) {
    r = c
    b = x
  }
  const toHex = (component: number) => {
    const hex = Math.round((component + m) * 255).toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Custom color picker (Pro `CustomColorPicker`, recovered contract).
 *
 * HSL saturation/lightness area + hue slider (drag with window mousemove /
 * mouseup), live hex preview + validated hex text input, and Clear / Apply
 * actions. Apply commits via `onChange`, Clear delegates to `onClear`.
 */
export function CustomColorPicker({ value, onChange, onClear }: CustomColorPickerProps) {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(100)
  const [lightness, setLightness] = useState(50)
  const [hexText, setHexText] = useState(value)
  const svRef = useRef<HTMLDivElement>(null)
  const hueRef = useRef<HTMLDivElement>(null)
  const [isSvDragging, setIsSvDragging] = useState(false)
  const [isHueDragging, setIsHueDragging] = useState(false)

  useEffect(() => {
    const hsl = hexToHsl(value)
    setHue(hsl.h)
    setSaturation(hsl.s)
    setLightness(hsl.l)
    setHexText(value)
  }, [value])

  useEffect(() => {
    setHexText(hslToHex(hue, saturation, lightness))
  }, [hue, saturation, lightness])

  const pickSv = useCallback((clientX: number, clientY: number) => {
    if (!svRef.current) return
    const rect = svRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
    setSaturation(x * 100)
    setLightness((100 - x * 50) * (1 - y))
  }, [])

  const pickHue = useCallback((clientX: number) => {
    if (!hueRef.current) return
    const rect = hueRef.current.getBoundingClientRect()
    setHue(Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) * 360)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isSvDragging && svRef.current) {
        pickSv(event.clientX, event.clientY)
      }
      if (isHueDragging && hueRef.current) {
        pickHue(event.clientX)
      }
    }
    const handleMouseUp = () => {
      setIsSvDragging(false)
      setIsHueDragging(false)
    }
    if (isSvDragging || isHueDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isSvDragging, isHueDragging, pickSv, pickHue])

  // Cursor position within the SV area, derived from the current S/L values
  const cursorTopPercent = (() => {
    const half = 100 - saturation / 2
    const top = half > 0 ? 1 - lightness / half : 0
    return Math.max(0, Math.min(100, top * 100))
  })()

  return (
    <div className="space-y-3">
      {/* Saturation / lightness area */}
      <div
        ref={svRef}
        className="relative w-full h-40 rounded cursor-crosshair"
        style={{
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`,
        }}
        onMouseDown={(event) => {
          setIsSvDragging(true)
          pickSv(event.clientX, event.clientY)
        }}
      >
        <div
          className="absolute w-4 h-4 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${Math.max(0, Math.min(100, saturation))}%`,
            top: `${cursorTopPercent}%`,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* Hue slider */}
      <div
        ref={hueRef}
        className="relative w-full h-3 rounded cursor-pointer"
        style={{
          background:
            "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        }}
        onMouseDown={(event) => {
          setIsHueDragging(true)
          pickHue(event.clientX)
        }}
      >
        <div
          className="absolute w-1 h-full bg-white border border-gray-400 -translate-x-1/2 pointer-events-none"
          style={{ left: `${(hue / 360) * 100}%` }}
        />
      </div>

      {/* Preview + hex input */}
      <div className="flex gap-2 items-center">
        <div
          className="w-10 h-10 rounded border-2 border-border shrink-0"
          style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}
        />
        <Input
          type="text"
          value={hexText}
          onChange={(event) => {
            const next = event.target.value
            setHexText(next)
            if (/^#[0-9A-Fa-f]{6}$/.test(next)) {
              const hsl = hexToHsl(next)
              setHue(hsl.h)
              setSaturation(hsl.s)
              setLightness(hsl.l)
            }
          }}
          placeholder="#000000"
          className="font-mono text-sm"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" size="sm" onClick={() => onClear?.()}>
          Clear
        </Button>
        <Button
          type="button"
          size="sm"
          onClick={() => onChange(hslToHex(hue, saturation, lightness))}
        >
          Apply
        </Button>
      </div>
    </div>
  )
}
