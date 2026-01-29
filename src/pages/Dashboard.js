import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1 style={styles.title}>
          Welcome to Adarsh Frontend Project
        </h1>

        <p style={styles.paragraph}>
          This project allows you to visually design workflows using
          actions and decision branches. It is built to be simple,
          user-friendly, and practical for real-world logic building.
        </p>

        <p style={styles.paragraph}>
          Click the start button below to begin creating your workflow
          and explore how decisions flow step by step.
        </p>

        <button
          style={styles.start}
          onClick={() => navigate("/flow")}
        >
          Start
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXFxcYFxUYGB0XGBoVFxgaFxUXGBoYHSggGBolHhgXIjEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ4PFSsZFRktLTctKystKystNy0rKystNzctLSsrKzcrNystNystKysrKysrKysrKysrKysrKysrK//AABEIAL0BCwMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAABAgMABAUGBwj/...')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    background: "rgba(255,255,255,0.9)",
    padding: "40px",
    borderRadius: "16px",
    width: "600px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    color: "red",
    marginBottom: "24px",
  },

  paragraph: {
    fontSize: "22px",
    fontWeight: "700",
    color: "black",
    marginBottom: "18px",
    lineHeight: "1.5",
  },

  start: {
    marginTop: "20px",
    padding: "14px 36px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#22c55e",
    color: "black",
    cursor: "pointer",
    fontWeight: "700",
  },
};
