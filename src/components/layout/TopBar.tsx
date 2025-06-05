import { Bell, Search, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TopbarProps {
  onMenuClick?: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="w-full flex justify-between items-center px-4 py-6 bg-[#ffffff]">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      <div className="relative w-full flex">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-6" />
        <input
          placeholder="Search..."
          className="px-4 py-2 pl-10 w-full md:w-1/3 text-sm text-gray-500 font-semibold outline-none"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-6 w-full md:w-auto justify-end sm:pr-14">
        <div className="relative">
          <Bell className="text-gray-500 w-4 sm:w-4" />
          <span className="absolute sm:top-0 sm:right-0 top-1 right-1 block sm:h-1.5 sm:w-1.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
        </div>

        <div className="flex items-center gap-2 py-2">
          <Avatar className="w-[37px] rounded-full">
            <AvatarImage src="/avatar.webp" alt="User" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-800">Maxbert</span>
          <img
            src="./triangle.png"
            className="w-[0.75em] h-[0.75em] ml-1 inline filter opacity-50"
            alt="dropdown"
          />
        </div>
      </div>
    </header>
  );
}
