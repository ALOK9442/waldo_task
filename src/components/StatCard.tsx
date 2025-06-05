import { MoveUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface StatCardProps {
  title: string;
  value: string;
}

export const StatCard = ({ title, value }: StatCardProps) => (
  <Card className="bg-white shadow p-4 rounded-xl flex justify-between w-full">
    <CardContent className="p-0 flex justify-between">
      <CardContent className="p-0 flex flex-col gap-2">
        <CardHeader className="p-0">
          <CardTitle className="text-sm text-gray-700 font-medium md:whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap whitespace-nowrap">
            {title}
          </CardTitle>
        </CardHeader>

        <p className="text-2xl font-semibold">{value}</p>

        <CardFooter className="p-0 flex items-center gap-1 text-sm text-green-600 whitespace-nowrap">
          <MoveUpRight className="w-4 h-4 shrink-0" />
          <span className="text-gray-700 font-semibold">13%</span>
          <span className="text-gray-500">+7k today</span>
        </CardFooter>
      </CardContent>
      <CardContent
        className="p-1 border-2 rounded-md h-fit"
        style={{ borderColor: "#897cf8" }}
      >
        <img
          src="./truck.png"
          alt="truck"
          className="w-6 h-6 object-contain"
          style={{
            filter:
              "invert(49%) sepia(77%) saturate(1342%) hue-rotate(216deg) brightness(90%) contrast(150%)",
          }}
        />
      </CardContent>
    </CardContent>
  </Card>
);
