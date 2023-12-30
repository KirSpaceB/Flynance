import CircleCaretDown from "../../assets/svg/CircleCaretDown"
import SearchLight from "../../assets/svg/SearchLight"
import Flynance_Logo from "../../assets/flynancelogo.png"

export default function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button className="flex items-center px-4 py-2 font-bold text-[#1B65E9] text-lg focus:outline-none">
            Courses
            <CircleCaretDown/>
          </button>
          <input type="text" placeholder="Search" className="px-4 py-2 w-38 border rounded-md text-sm focus:outline-none" />
          <SearchLight/>
        </div>

        <button className="flex items-center space-x-4">
          <img src={Flynance_Logo} alt="Flynance_Logo" className="w-8 h-8"/>
          <h1 className="font-bold text-2xl text-[#332036]">Flynance</h1>
        </button>


        <div className="flex items-center">
          <button className="px-4 py-2 text-lg font-bold text-[#1B65E9] hover:text-gray-900 focus:outline-none">Get AI Guide</button>
          <button className="px-4 py-2 text-lg font-bold text-[#1B65E9] hover:text-gray-900 focus:outline-none">Donate</button>
          <button className="px-4 py-2 text-lg font-bold text-[#1B65E9] hover:text-gray-900 focus:outline-none">Login</button>
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 focus:outline-none">Sign up</button>
        </div>
      </nav>
    </div>
  )
}
