import { useState } from "react";
import NodeCard from "../components/NodeCard";

export default function Flow() {
  const [nodes, setNodes] = useState([
    { id: "start", type: "start", label: "Start" },
  ]);

  // ADD NODE
  const addNode = (type) => {
    setNodes((prev) => [
      ...prev,
      {
        id: `${type}-${Date.now()}`,
        type,
        label: type === "action" ? "Action Step" : "Decision",
      },
    ]);
  };

  // DELETE NODE
  const deleteNode = (id) => {
    setNodes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>✨ Workflow Canvas ✨</h1>

      <div style={styles.stack}>
        {nodes.map((node) => (
          <NodeCard
            key={node.id}
            label={node.label}
            type={node.type}
            isStart={node.type === "start"}
            onAddAction={() => addNode("action")}
            onAddBranch={() => addNode("branch")}
            onDelete={() => deleteNode(node.id)}
            onYes={() => addNode("action")}
            onNo={() => deleteNode(node.id)} // 🔥 NO deletes node
          />
        ))}
      </div>

      <button
        style={styles.saveBtn}
        onClick={() => {
          console.log("Workflow JSON:", nodes);
          alert("Workflow saved in console");
        }}
      >
        💾 Save Workflow
      </button>
    </div>
  );
}

/* 🌈 STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: `
      radial-gradient(circle at top left, #a855f7, transparent 40%),
      radial-gradient(circle at top right, #22d3ee, transparent 40%),
      radial-gradient(circle at bottom left, #22c55e, transparent 40%),
      radial-gradient(circle at bottom right, #f43f5e, transparent 40%),
      linear-gradient(135deg, #020617, #020617)
    `,
  },

  title: {
    fontSize: 42,
    marginBottom: 40,
    color: "#e9d5ff",
    textShadow: `
      0 0 10px #a855f7,
      0 0 20px #22d3ee,
      0 0 40px #22c55e
    `,
  },

  stack: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
    maxWidth: 520,
  },

  saveBtn: {
    marginTop: 40,
    padding: "14px 28px",
    background: "linear-gradient(90deg,#22c55e,#4ade80)",
    border: "none",
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(34,197,94,0.8)",
  },
};
