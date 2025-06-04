import { LayoutDashboard, Package, ShoppingCart, Users, Star, CreditCard, Settings } from 'lucide-react';

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Product", icon: Package },
  { name: "Orders", icon: ShoppingCart },
  { name: "Customers", icon: Users },
  { name: "Manage Reviews", icon: Star },
  { name: "Checkout", icon: CreditCard },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="bg-[#ffffff] w-64 min-h-screen hidden md:flex flex-col shadow-lg">
      <div className="flex items-center gap-2 px-6 py-4 text-xl font-bold">
        <img src="/logo.png" alt="logo" />
        {/* <span className="text-indigo-600">Shipping <span className="text-indigo-600">Plus</span></span> */}
      </div>
      <nav className="mt-4 flex flex-col gap-2 px-4">
        {menu.map(({ name, icon: Icon }) => (
          <a href="#" key={name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Icon size={18} />
            {name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
