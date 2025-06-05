import { ChevronRight } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import "../App.css";

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
    <div
      className="w-full overflow-x-auto hide-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <p className="font-medium text-lg mb-4 px-[1.5rem] text-gray-700">
        Tracking Order
      </p>
      <Table className="w-full table-auto text-sm border-separate border-spacing-y-3 whitespace-nowrap ml-[1.5rem]">
        <TableRow className="text-gray-600 text-xs uppercase">
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Product Id
          </TableCell>
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Type
          </TableCell>
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Arrival Time
          </TableCell>
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Weight
          </TableCell>
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Route
          </TableCell>
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Fee
          </TableCell>
          <TableCell className="pb-2 text-left text-[#a4a2a8] font-medium text-xs">
            Status
          </TableCell>
        </TableRow>
        <TableBody>
          {orders.map((o, i) => (
            <TableRow key={i} className="border-b border-gray-200">
              <TableCell className="py-3 text-[#a4a2a8]">
                {o.productId}
              </TableCell>
              <TableCell className="py-3">
                <span className="rounded-md bg-[#b6b4ba] px-2 py-1 text-xs text-gray-200">
                  {o.type}
                </span>
              </TableCell>
              <TableCell className="py-3 text-gray-700 font-normal text-sm">
                {o.arrivalTime}
              </TableCell>
              <TableCell className="py-3 text-gray-700 font-normal text-sm">
                {o.weight}
              </TableCell>
              <TableCell className="py-3 text-gray-700 font-normal text-sm">
                <div className="flex items-center gap-1">
                  <span>{o.source}</span>
                  <ChevronRight className="h-5 w-5 text-gray-800 font-semibold" />
                  <span>{o.destination}</span>
                </div>
              </TableCell>
              <TableCell className="py-3 text-gray-700 font-normal text-sm">
                {o.fee}
              </TableCell>
              <TableCell className="py-3 text-gray-700 font-normal text-sm w-fit">
                <Badge className="rounded-full bg-[#daffc9] px-3 py-1 w-fit text-xs text-[#47aa50] font-medium">
                  {o.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);
