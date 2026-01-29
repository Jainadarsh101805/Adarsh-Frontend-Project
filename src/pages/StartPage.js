import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="title">Decision Flow Designer</h1>

      <div className="canvas">
        <div
          className="node start clickable"
          onClick={() => navigate("/builder")}
        >
          <strong>Start</strong>
          <p style={{ marginTop: "8px", opacity: 0.7 }}>
            Click to begin workflow
          </p>
        </div>
      </div>
    </div>
  );
}
