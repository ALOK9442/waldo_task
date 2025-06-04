import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-3 bg-[#ffffff] shadow-md md:rounded-none rounded-b-md">
      <input
        placeholder="Search..."
        className="rounded-lg px-4 py-2 w-full md:w-1/3 text-sm outline-none"
      />
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="text-gray-500" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/avatar.webp"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            Maxbert
          </span>
        </div>
      </div>
    </header>
  );
}
