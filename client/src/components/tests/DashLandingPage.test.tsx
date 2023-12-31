import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DashLandingPage from "../ui/DashLandingPage"

describe("DashLandingPage Test Suite", () => {
  it('DashLandingPage Renders', () => {
    render(<DashLandingPage/>)
  })
  it('CreatePlanButton is in the DOM', () => {
    // What would be the best way to just find a specific HTML on the DOM.
    expect(screen.findByRole('button')).toBeInTheDocument()
  })
})