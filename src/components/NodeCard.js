export default function NodeCard({
  label,
  type,
  isStart,
  onAddAction,
  onAddBranch,
  onDelete,
  onYes,
  onNo,
}) {
  const isBranch = type === "branch";

  return (
    <div style={card(type)}>
      <strong style={{ fontSize: 18 }}>{label}</strong>

      {/* ACTION BUTTONS */}
      <div style={btnRow}>
        {isStart ? (
          <>
            <button style={btnBlue} onClick={onAddAction}>+ Action</button>
            <button style={btnYellow} onClick={onAddBranch}>+ Branch</button>
          </>
        ) : (
          <>
            <button style={btnBlue} onClick={onAddAction}>+ Action</button>
            <button style={btnYellow} onClick={onAddBranch}>+ Branch</button>
            <button style={btnRed} onClick={onDelete}>Delete</button>
          </>
        )}
      </div>

      {/* YES / NO FOR DECISION */}
      {isBranch && (
        <div style={btnRow}>
          <button style={btnGreen} onClick={onYes}>Yes</button>
          <button style={btnGray} onClick={onNo}>No</button>
        </div>
      )}
    </div>
  );
}

/* 🌈 CARD STYLE */
const card = (type) => ({
  width: "100%",
  padding: 18,
  borderRadius: 16,
  textAlign: "center",
  color: "black",
  background:
    type === "start"
      ? "linear-gradient(135deg,#22c55e,#4ade80)"
      : type === "branch"
      ? "linear-gradient(135deg,#f59e0b,#fbbf24)"
      : "linear-gradient(135deg,#6366f1,#818cf8)",
  boxShadow: `
    0 0 20px rgba(255,255,255,0.2),
    0 0 40px rgba(99,102,241,0.5)
  `,
});

/* BUTTON ROW */
const btnRow = {
  marginTop: 14,
  display: "flex",
  gap: 10,
  justifyContent: "center",
  flexWrap: "wrap",
};

/* BUTTONS */
const btnBlue = {
  background: "#1d4ed8",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const btnYellow = {
  background: "#f59e0b",
  color: "black",
  border: "none",
  padding: "6px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const btnRed = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const btnGreen = {
  background: "#22c55e",
  color: "black",
  border: "none",
  padding: "6px 14px",
  borderRadius: 8,
  cursor: "pointer",
};

const btnGray = {
  background: "#9ca3af",
  color: "black",
  border: "none",
  padding: "6px 14px",
  borderRadius: 8,
  cursor: "pointer",
};
