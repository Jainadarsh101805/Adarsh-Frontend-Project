import { useState } from "react";
import "./Dashboard.css";

export default function FlowBuilder() {
  const [nodes, setNodes] = useState([
    { id: 1, type: "action", label: "Action Step" }
  ]);

  return (
    <div className="dashboard">
      <h1 className="title">Workflow Builder</h1>

      <div className="canvas">
        {nodes.map((node) => (
          <div key={node.id} className={`node ${node.type}`}>
            <strong>{node.label}</strong>

            <div className="actions">
              <button className="btn add">+ Add Next</button>
              <button className="btn delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
