import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DashNavbar from "../ui/DashNavbar"
jest.mock("react-router-dom")
// we need to test the navbar being able to support more items in the future.
describe("DashNavbar", () => {
  it("renders", () => {
    render(<DashNavbar/>)
  })

  it("render input", () => {
    render(<DashNavbar/>)
    // We added the jest-dom library test if search would render in the document.
    // The reason for this test is to make sure we always have the element input because it will be important in the future
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument()
  })
})