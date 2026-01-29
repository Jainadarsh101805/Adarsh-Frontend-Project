import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Flow from "./pages/Flow";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/flow" element={<Flow />} />
    </Routes>
  );
}
