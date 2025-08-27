import { useEffect, useState } from "react";
import UserForm from "../components/userForm";
import UserTable from "../components/userTable";
import { getUsers, createUser } from "../api/userApi";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserAdded = async (user) => {
    try {
      await createUser(user);
      fetchUsers();
    } catch {
      setError("Failed to create user");
    }
  };

  return (
    <div className="p-4">
      <h1>User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserTable users={users} />
    </div>
  );
}
