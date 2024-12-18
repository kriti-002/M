// app/admin/page.jsx
import Table from "../components/Table";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Admin Dashboard</h1>
      <Table data={users} title="Manage Users" />
    </div>
  );
}
