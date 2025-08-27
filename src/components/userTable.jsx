export default function UserTable({ users }) {
  return (
    <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((u, index) => (
            <tr key={index+1}>
              <td>{index+1}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
