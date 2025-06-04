export default function DashboardHeader() {
  return (
    <div className="mb-6 flex justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Max</h1>
        <p className="text-gray-500">
          Here's what's happening with your store today.
        </p>
      </div>
      <div className="flex justify-between bg-white px-4 py-1 items-center">
        <p className="text-gray-500 font-semibold">Show Stats:</p>{" "}
        <span>Per Day</span>{" "}
        <img src="./triangle.png" className="w-[1em] h-[1em] ml-1 inline" />
      </div>
    </div>
  );
}
