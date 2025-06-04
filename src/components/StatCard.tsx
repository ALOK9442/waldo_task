import { MoveUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
}

export const StatCard = ({ title, value }: StatCardProps) => (
  <div className="bg-[#ffffff] shadow p-4 rounded-xl flex justify-between w-full">
    <div className="flex flex-col gap-1">
      <p className="text-md text-gray-900">{title}</p>
      <p className="text-4xl font-semibold">{value}</p>
      <div className="flex items-center gap-1 text-sm text-green-600">
        <MoveUpRight className="w-4 h-4" />
        <span className="text-gray-900 font-semibold">13%</span> <span className="text-gray-500">+7K Today</span>
      </div>
    </div>
    <div className="p-1 border border-purple-600 rounded-md h-fit">
      <img src="./truck.png" alt="truck" className="w-6 h-6 object-contain" />
    </div>
  </div>
);
