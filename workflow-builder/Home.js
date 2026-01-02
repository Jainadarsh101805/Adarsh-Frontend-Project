import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Workflow Builder</h1>

      <div style={styles.startNode} onClick={() => navigate("/flow")}>
        START
        <p style={styles.sub}>Click to design workflow</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
    color: "#0f172a",
  },
  startNode: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#2563eb",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  sub: {
    fontSize: "12px",
    marginTop: "8px",
    opacity: 0.8,
  },
};
