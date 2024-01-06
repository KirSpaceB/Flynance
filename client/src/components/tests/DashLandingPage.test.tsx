import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DashLandingPage from "../ui/DashLandingPage"
// unit test web: write test for every single part of the component, then you mock dependecies
// pull request hook // use husky
// put the test in co-location to component * style preference
describe("DashLandingPage Test Suite", () => {
  it('DashLandingPage Renders', () => {
    render(<DashLandingPage/>)
  })
  it('CreatePlanButton is in the DOM', () => {
    // What would be the best way to just find a specific HTML on the DOM.
    expect(screen.findByRole('button')).toBeInTheDocument()
  })
})