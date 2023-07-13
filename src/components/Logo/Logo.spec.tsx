import { render, screen } from "@testing-library/react"

import { Logo } from "./Logo"

describe("Logo", () => {
  it("should render in screen", () => {
    render(<Logo />)

    const logoText = screen.getByRole("heading", { name: "Logo" })

    expect(logoText).toBeInTheDocument()
  })
})
