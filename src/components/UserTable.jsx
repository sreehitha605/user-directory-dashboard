import { useNavigate } from "react-router-dom";

export default function UserTable({ users, setSortField, setSortOrder, sortOrder }) {
  const navigate = useNavigate();

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th onClick={() => handleSort("company")}>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}