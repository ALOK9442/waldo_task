interface ShipmentCardProps {
  id: number;
  location: string;
}

export const ShipmentCard = ({ id, location }: ShipmentCardProps) => (
  <div className="bg-[#f5f7fa] shadow rounded-lg p-4 flex gap-4 items-center">
    <img src="/truck.png" alt="truck" className="w-16 h-16" />
    <div>
      <h4 className="font-bold text-md">Shipment #{id}</h4>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
  </div>
);
