export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>Node Types</h3>
      <p>➕ Action</p>
      <p>🔀 Branch</p>
      <p>⛔ End</p>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    background: "#020617",
    borderRight: "1px solid #1e293b",
    padding: "20px",
    color: "#e5e7eb"
  }
};
