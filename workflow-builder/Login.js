export default function Login({ onLogin }) {
  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <button onClick={onLogin}>Enter Dashboard</button>
    </div>
  );
}
