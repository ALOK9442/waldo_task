interface Order {
  productId: string;
  type: string;
  arrival: string;
  weight: string;
  route: string;
  fee: string;
  status: string;
}

export const OrderTable = ({ orders }: { orders: Order[] }) => (
  <div className="overflow-auto bg-[#f5f7fa] rounded-xl shadow p-4">
    <table className="min-w-full text-left text-sm">
      <thead>
        <tr className="text-gray-500">
          <th>PRODUCT ID</th><th>TYPE</th><th>ARRIVAL TIME</th><th>WEIGHT</th><th>ROUTE</th><th>FEE</th><th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o, i) => (
          <tr key={i} className="border-t">
            <td>{o.productId}</td>
            <td>{o.type}</td>
            <td>{o.arrival}</td>
            <td>{o.weight}</td>
            <td>{o.route}</td>
            <td>{o.fee}</td>
            <td><span className="text-green-600 font-semibold">{o.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
