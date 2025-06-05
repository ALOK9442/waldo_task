import Layout from "../components/layout/Layout";
import DashboardHeader from "../components/DashBoardHeader";
import { StatCard } from "../components/StatCard";
import { ShipmentCard } from "../components/ShipMentCard";
import { OrderTable } from "../components/OrderTable";
import { orders } from "../utils/data";
import { ShipmentMap } from "../components/shipMentMap";

export default function Home() {
  return (
    <Layout>
      <DashboardHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Units Packed" value="831,071" />
        <StatCard title="Total Shipments" value="831,071" />
        <StatCard title="Active Shipments" value="831,071" />
        <StatCard title="Delivered Shipments" value="831,071" />
      </div>

      <div className="flex lg:flex-row flex-col gap-4 bg-white p-4 rounded-xl mb-6">
        <div
          className="flex flex-col gap-4 basis-1/2 max-h-92 overflow-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="text-xl font-semibold">In Transit Shipments</div>
          <ShipmentCard
            id={831071}
            pickupLocation="1070 street st yard main glasco, san Francisco"
            dropoffLocation="1070 street st yard main glasco, san Francisco"
            isActive
          />
          <ShipmentCard
            id={831071}
            pickupLocation="1070 street st yard main glasco, san Francisco"
            dropoffLocation="1070 street st yard main glasco, san Francisco"
          />
        </div>
        <ShipmentMap />
      </div>

      <OrderTable orders={orders} />
    </Layout>
  );
}
