import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import SortControls from "../components/SortControls";

const API = "https://jsonplaceholder.typicode.com/users";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Filter
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sortedUsers = [...filteredUsers].sort((a, b) => {
  if (!sortField || !sortOrder) return 0;

  let valA = sortField === "company" ? a.company?.name : a[sortField];
  let valB = sortField === "company" ? b.company?.name : b[sortField];

  valA = valA?.toLowerCase();
  valB = valB?.toLowerCase();

  if (valA < valB) return sortOrder === "asc" ? -1 : 1;
  if (valA > valB) return sortOrder === "asc" ? 1 : -1;
  return 0;
});

  return (
    <div>
      <h1>User Directory</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <SortControls
        setSortField={setSortField}
        setSortOrder={setSortOrder}
      />
      <UserTable
        users={sortedUsers}
        setSortField={setSortField}
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}
      />
    </div>
  );
}