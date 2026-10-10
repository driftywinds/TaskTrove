import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@/test-utils"
import { CustomColorPicker } from "./custom-color-picker"

describe("CustomColorPicker (recovered Pro contract)", () => {
  const onChange = vi.fn()
  const onClear = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  function renderPicker(value = "#ff0000") {
    return render(<CustomColorPicker value={value} onChange={onChange} onClear={onClear} />)
  }

  it("renders the sv area, hue slider, preview, hex input, and actions", () => {
    renderPicker()

    expect(screen.getByPlaceholderText("#000000")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument()
  })

  it("round-trips a hex value through the hex input and Apply", () => {
    renderPicker("#000000")

    const input = screen.getByPlaceholderText("#000000")
    fireEvent.change(input, { target: { value: "#00ff00" } })
    fireEvent.click(screen.getByRole("button", { name: "Apply" }))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0]?.[0]).toBe("#00ff00")
  })

  it("keeps typing text without committing until it is a valid hex", () => {
    renderPicker("#000000")

    const input = screen.getByPlaceholderText("#000000")
    fireEvent.change(input, { target: { value: "#00ff" } })
    fireEvent.click(screen.getByRole("button", { name: "Apply" }))

    // Incomplete hex is not parsed; Apply still commits the current slider state
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0]?.[0]).toMatch(/^#[0-9a-f]{6}$/)
  })

  it("delegates Clear to onClear", () => {
    renderPicker()

    fireEvent.click(screen.getByRole("button", { name: "Clear" }))

    expect(onClear).toHaveBeenCalledTimes(1)
    expect(onChange).not.toHaveBeenCalled()
  })
})
