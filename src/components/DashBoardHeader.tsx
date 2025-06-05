import { Card } from "./ui/card";

export default function DashboardHeader() {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-between w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-4xl font-semibold font-sans">
          Welcome back, Max
        </h1>
        <p className="text-gray-500 font-semibold text-xs md:text-sm">
          Here's what's happening with your store today.
        </p>
      </div>

      <Card className="flex flex-row justify-between w-full md:w-fit h-fit bg-white px-3 py-2 items-center gap-4 md:gap-8 mt-4 md:mt-0 rounded-md shadow-sm">
        <div className="flex text-md items-center whitespace-nowrap">
          <span className="text-[#d1d2d7] font-semibold">
            Show Stats:&nbsp;
          </span>
          <span>Per Day</span>
        </div>
        <img
          src="./triangle.png"
          className="max-w-[0.75em] max-h-[0.75em] ml-1 inline filter opacity-50"
          alt="dropdown arrow"
        />
      </Card>
    </div>
  );
}
