import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  // Dummy user data
  const users = {
    1: { name: "Manu", email: "manu@example.com" },
    2: { name: "Madhuri", email: "madhuri@example.com" },
    3: { name: "Hey", email: "hey@example.com" }
  };

  const user = users[id];

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      {user ? (
        <>
          <h2>User Details</h2>
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}
