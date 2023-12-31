
export default function DashLandingPage() {
  return (
    <div className="flex w-screen h-3/4">
      <div className="w-1/2 flex flex-col">

        <div className="w-full h-[86vh] bg-blue-100 flex justify-center items-center">
          <div className="lg:ml-[50px] flex flex-col space-y-4">
            <h1 className="lg:text-[52px] lg:leading-normal font-bold text-black ">Learn, Strive, and be passionate</h1>
            <p className="lg:text-[12px] lg:w-[519px] lg:h-[40px] font-normal text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="lg:w-[145px] lg:h-[40px] rounded-[12px] bg-[#A66F6F]">Create Plan</button>
          </div>
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
