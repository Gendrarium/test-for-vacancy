import { Navigate, Route, Routes } from "react-router-dom";
import Calls from "../Calls/Calls";
import NavPanel from "../NavPanel/NavPanel";

const App: React.FC = () => {
  return (
    <div className="page">
      <NavPanel />
      <Routes>
        <Route path="/calls" element={<Calls />} />
        <Route path="*" element={<Navigate to="/calls" />} />
      </Routes>
    </div>
  );
};

export default App;
