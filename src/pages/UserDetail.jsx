import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "https://jsonplaceholder.typicode.com/users";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>

      <h3>Address</h3>
      <p>
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
}