
export default function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 focus:outline-none">
            Courses
            <img src="/path-to-your-dropdown-arrow-image" alt="DropdownArrow" className="ml-2" />
          </button>
          <img src="/path-to-your-search-icon-image" alt="search icon" className="w-4 h-4" /> 
          <input type="text" placeholder="Search" className="px-4 py-2 w-64 border rounded-sm text-sm focus:outline-none" />
        </div>

        <button className="flex items-center">
          <img src="/path-to-your-search-icon-image" alt="search icon" className="w-4 h-4" /> 
          <h1>Flynance</h1>
        </button>


        <div className="flex items-center">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 focus:outline-none">Get AI Guide</button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 focus:outline-none">Donate</button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 focus:outline-none">Login</button>
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 focus:outline-none">Sign up</button>
        </div>
      </nav>
    </div>
  )
}
