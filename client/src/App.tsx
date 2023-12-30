import Navbar from "./components/ui/dash_Navbar"
import DashMobileNavbar from "./components/ui/dash_mobile_Navbar"
import { useEffect, useState } from "react"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const mobileBreakpoint = 768; // This breakpoint supports small screens but does not support medium screens, Is there a way to support mediums screen or should we configure all of it in one file? Ex: md: do this lg:do this?

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize);
  },[])

  return (
    <>
      <div className="">
        {windowWidth > mobileBreakpoint ? <Navbar /> : <DashMobileNavbar />}
      </div>
    </>
  )
}

export default App
