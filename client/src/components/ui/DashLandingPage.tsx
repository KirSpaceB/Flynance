
export default function DashLandingPage() {
  return (
    <div className="flex w-screen h-3/4">
      <div className="w-1/2 flex flex-col">
        <div className="w-full h-[86vh] bg-blue-100 flex justify-center items-center">
          ScreenLeft
        </div>
        <div className="flex h-1/3">
          <div className="w-1/2 h-full bg-green-100 flex justify-center items-center">
            Square 1
          </div>
          <div className="w-1/2 bg-yellow-100 h-full flex justify-center items-center">
            Square 2
          </div>
        </div>
      </div>
      <div className="w-1/2 h-[90vh] bg-red-100 flex justify-center items-center">
        ScreenRight
      </div>
    </div>
  )
}
