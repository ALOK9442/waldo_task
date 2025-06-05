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
        <div className="flex flex-col items-center mt-4 relative">
          <div className="w-2 h-2 rounded-full bg-black relative z-10">
            <div className="absolute -inset-1 rounded-full border border-black" />
          </div>

          <div className="flex-1 border-l-2 border-dotted border-black my-1 min-h-[3rem] sm:min-h-[2.5rem]" />

          <MapPin className="w-6 h-6 text-[#5B3CF0] -mt-1" />
        </div>

        <div className="flex flex-col text-sm text-gray-600 flex-1 mt-4">
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-xs font-normal text-gray-500">Pickup location</p>
            <p className="text-sm font-semibold text-gray-800">
              {pickupLocation}
            </p>
          </div>

          <div className="flex-1 flex items-center">
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
          </div>

          <div className="flex flex-col gap-1 mt-2">
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
    <img
      src="/truckimage.jpg"
      alt="truck"
      className="sm:w-32 w-24 object-contain"
    />
  </div>
);
