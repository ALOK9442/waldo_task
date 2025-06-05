import { ChevronRight } from "lucide-react";

interface Order {
  productId: string;
  type: string;
  arrivalTime: string;
  weight: string;
  source: string;
  destination: string;
  fee: string;
  status: string;
}

export const OrderTable = ({ orders }: { orders: Order[] }) => (
  <div className="w-full rounded-xl bg-white p-4 shadow">
    <div className="w-full overflow-x-auto">
      <p className="font-medium text-lg mb-4 px-[1.5rem] text-gray-700">
        Tracking Order
      </p>
      <table className="w-full min-w-max table-auto text-sm border-separate border-spacing-y-3 whitespace-nowrap ml-[1.5rem]">
        <thead>
          <tr className="text-gray-600 text-xs uppercase">
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Product Id
            </th>
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Type
            </th>
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Arrival Time
            </th>
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Weight
            </th>
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Route
            </th>
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Fee
            </th>
            <th className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td className="py-3 text-[#a4a2a8] border-b border-gray-200">
                {o.productId}
              </td>
              <td className="py-3 border-b border-gray-200">
                <span className="rounded-md bg-[#b6b4ba] px-2 py-1 text-xs text-gray-200">
                  {o.type}
                </span>
              </td>
              <td className="py-3 text-gray-700 font-normal border-b border-gray-200 text-sm">
                {o.arrivalTime}
              </td>
              <td className="py-3 text-gray-700 font-normal border-b border-gray-200 text-sm">
                {o.weight}
              </td>
              <td className="py-3 text-gray-700 font-normal border-b border-gray-200 text-sm">
                <div className="flex items-center gap-1">
                  <span>{o.source}</span>
                  <ChevronRight className="h-5 w-5 text-gray-800 font-semibold" />
                  <span>{o.destination}</span>
                </div>
              </td>
              <td className="py-3 text-gray-700 font-normal border-b border-gray-200 text-sm">
                {o.fee}
              </td>
              <td className="py-3 text-gray-700 font-normal border-b border-gray-200 text-sm">
                <span className="rounded-full bg-[#daffc9] px-3 py-1 text-xs text-[#47aa50] font-medium">
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
