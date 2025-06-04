import Layout from "../components/layout/Layout";
import DashboardHeader from "../components/DashBoardHeader";
import { StatCard } from "../components/StatCard";
import { ShipmentCard } from "../components/ShipMentCard";
import { OrderTable } from "../components/OrderTable";
import { orders } from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <DashboardHeader />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Units Packed" value="831,071" />
        <StatCard title="Total Shipments" value="831,071" />
        <StatCard title="Active Shipments" value="831,071" />
        <StatCard title="Delivered Shipments" value="831,071" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <ShipmentCard id={831071} location="1070 Street St Yard, SF" />
        <ShipmentCard id={831071} location="1070 Street St Yard, SF" />
      </div>

      <OrderTable orders={orders} />
    </Layout>
  );
}
