export default function NodeCard({
  label,
  type,
  onAddAction,
  onAddBranch,
  onDelete,
  onYes,
  onNo,
}) {
  const colors = {
    start: "#22c55e",
    action: "#6366f1",
    branch: "#f97316",
  };

  return (
    <div
      style={{
        background: "#020617",
        borderLeft: `6px solid ${colors[type]}`,
        padding: 16,
        borderRadius: 12,
        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
      }}
    >
      <h3>{label}</h3>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button onClick={onAddAction}>+ Action</button>
        <button onClick={onAddBranch}>+ Branch</button>
        <button onClick={onDelete}>Delete</button>
      </div>

      {type === "branch" && (
        <div style={{ marginTop: 10 }}>
          <button onClick={onYes}>Yes</button>
          <button onClick={onNo}>No</button>
        </div>
      )}
    </div>
  );
}
