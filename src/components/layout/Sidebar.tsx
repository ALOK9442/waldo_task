import {
  LayoutDashboard,
  Settings,
  ShoppingBag,
  SquareUser,
  ShoppingCart,
  MessageSquareHeart,
  ChevronDown,
  ReceiptText,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, expandable: false },
  { name: "Product", icon: ShoppingBag, expandable: true },
  { name: "Orders", icon: ReceiptText, expandable: true },
  { name: "Customers", icon: SquareUser, expandable: true },
  { name: "Manage Reviews", icon: MessageSquareHeart, expandable: false },
  { name: "Checkout", icon: ShoppingCart, expandable: false },
  { name: "Settings", icon: Settings, expandable: false },
];

export default function Sidebar() {
  const activeItem = "Dashboard";

  return (
    <div className="bg-white min-h-screen flex flex-col w-64">
      <div className="flex items-center px-6 pt-6 pb-4 mb-10">
        <img src="/shippingicon.png" alt="logo" className="w-40" />
      </div>
      <nav className="flex flex-col gap-1 px-4">
        {menu.map(({ name, icon: Icon, expandable }) => {
          const isActive = name === activeItem;
          return (
            <a
              key={name}
              href="#"
              className={`flex items-center justify-between group px-2 py-2 text-sm font-medium text-gray-600 rounded-md ${
                isActive ? "bg-[#e5e4ff]" : ""
              }`}
            >
              <div className={`flex items-center gap-3 `}>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    isActive ? "bg-[#e5e4ff]" : ""
                  }`}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-[#5b3cf0]" : "text-gray-500"}
                  />
                </div>
                <span>{name}</span>
              </div>
              {expandable && (
                <ChevronDown
                  size={16}
                  className="text-gray-400 group-hover:text-gray-600"
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
