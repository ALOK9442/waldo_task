import { ChevronRight } from "lucide-react";

interface Order {
  productId: string;
  type: string;
  arrival: string;
  weight: string;
  route: string;
  fee: string;
  status: string;
}

export const OrderTable = ({ orders }: { orders: Order[] }) => (
  <div className="w-full rounded-xl bg-white p-4 shadow">
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max table-auto text-sm border-separate border-spacing-x-6 border-spacing-y-3 whitespace-nowrap">
        <thead>
          <tr className="text-gray-500 text-xs uppercase">
            {orders.length > 0 &&
              Object.keys(orders[0]).map((key) => (
                <th
                  key={key}
                  className="pb-2 text-left text-[#b9b7bb] font-medium text-xs"
                >
                  {key.toUpperCase().replace(/_/g, " ")}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="py-3 text-gray-400">{o.productId}</td>
              <td className="py-3">
                <span className="rounded-md bg-[#b6b4ba] px-2 py-1 text-xs text-gray-100">
                  {o.type}
                </span>
              </td>
              <td className="py-3 text-gray-700 font-medium">{o.arrival}</td>
              <td className="py-3 text-gray-700 font-medium">{o.weight}</td>
              <td className="py-3 text-gray-700 font-medium">
                <div className="flex items-center gap-1">
                  {o.route.split(" > ").map((location, idx, arr) => (
                    <div key={idx} className="flex items-center">
                      <span>{location}</span>
                      {idx < arr.length - 1 && (
                        <ChevronRight className="mx-1 h-4 w-4" />
                      )}
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-3 text-gray-700 font-medium">{o.fee}</td>
              <td className="py-3 text-gray-700 font-medium">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
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
