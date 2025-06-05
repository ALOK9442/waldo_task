import { MapPin } from "lucide-react";

interface ShipmentCardProps {
  id: number;
  pickupLocation: string;
  dropoffLocation: string;
  isActive?: boolean;
}

export const ShipmentCard = ({
  id,
  pickupLocation,
  dropoffLocation,
  isActive = false,
}: ShipmentCardProps) => (
  <div
    className={`rounded-xl p-4 flex gap-4 md:gap-16 items-start border w-full ${
      isActive ? "border-[#5B3CF0]" : "border-gray-200"
    }`}
  >
    <div className="flex flex-col gap-2 flex-1">
      <h4 className="font-normal text-md">Shipment Number</h4>
      <p className="text-xl font-semibold">{id.toLocaleString()}</p>

      <div className="flex gap-2">
        <div className="flex flex-col items-center mt-4">
          <div className="w-2 h-2 rounded-full bg-black relative">
            <div className="absolute -inset-1 rounded-full border border-black" />
          </div>

          <div className="sm:h-9 h-16 border-l-2 border-dotted border-black my-1" />

          <MapPin className="w-4 h-4 text-[#5B3CF0]" />
        </div>

        <div className="flex flex-col text-sm text-gray-600 flex-1">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-normal text-gray-500">Pickup location</p>
            <p className="text-sm font-semibold text-gray-800">
              {pickupLocation}
            </p>
            {/* <div className="border-b border-dotted border-black mt-1 w-full" /> */}
          </div>
          <div
            className="w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #BDBDBD 30%, transparent 30%)",
              backgroundSize: "7px 4px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
              height: "2px",
            }}
          />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-normal text-gray-500">
              Drop off location
            </p>
            <p className="text-sm font-semibold text-gray-800">
              {dropoffLocation}
            </p>
          </div>
        </div>
      </div>
    </div>
    <img src="/truckimage.jpg" alt="truck" className="sm:w-32 w-24" />
  </div>
);
