import { MoveUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
}

export const StatCard = ({ title, value }: StatCardProps) => (
  <div className="bg-[#ffffff] shadow p-4 rounded-xl flex justify-between w-full">
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-700 font-medium">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
      <div className="flex items-center gap-1 text-sm text-green-600">
        <MoveUpRight className="w-4 h-4" />
        <span className="text-gray-700 font-semibold">13%</span>{" "}
        <span className="text-gray-500">+7k today</span>
      </div>
    </div>
    <div className="p-1 border-2 rounded-md h-fit" style={{ borderColor: "#897cf8" }}>
      <img
        src="./truck.png"
        alt="truck"
        className="w-6 h-6 object-contain"
        style={{ filter: "invert(49%) sepia(77%) saturate(1342%) hue-rotate(216deg) brightness(90%) contrast(150%)" }}
      />
    </div>
  </div>
);
