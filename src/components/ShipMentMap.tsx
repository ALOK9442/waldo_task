export const ShipmentMap = () => {
  return (
    <div className="flex flex-col h-full w-full basis-1/2">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">On the Way</h3>
      <img
        src="./map.jpg"
        alt="Map"
        className="rounded-md mb-4 object-cover w-full"
      />
      <div className="grid grid-cols-5 gap-2 text-sm text-gray-600">
        <div className="border-r border-gray-200">
          <p className="font-normal text-gray-400">Category</p>
          <p className="font-medium">Electronics</p>
        </div>
        <div className="border-r border-gray-200">
          <p className="font-normal text-gray-400">Distance</p>
          <p className="font-medium">120KM</p>
        </div>
        <div className="border-r border-gray-200">
          <p className="font-normal text-gray-400">Estimation</p>
          <p className="font-medium">2d 4h</p>
        </div>
        <div className="border-r border-gray-200">
          <p className="font-normal text-gray-400">Weight</p>
          <p className="font-medium">10kg</p>
        </div>
        <div className="border-r border-gray-200">
          <p className="font-normal text-gray-400">Fee</p>
          <p className="font-medium">$1000</p>
        </div>
      </div>
    </div>
  );
};