export default function Topbar() {
  return (
    <div style={styles.topbar}>
      <h3>Automation Workflow</h3>
      <button style={styles.save}>Save</button>
    </div>
  );
}

const styles = {
  topbar: {
    height: "60px",
    background: "#020617",
    borderBottom: "1px solid #1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    color: "#e5e7eb"
  },
  save: {
    background: "#22c55e",
    color: "#020617",
    padding: "8px 12px",
    borderRadius: "8px",
    fontWeight: "bold"
  }
};
