import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import "./styles/App.css";
import Fallback from "./components/Fallback";
import RoutesComponent from "./routes/RoutesComponent";

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <RoutesComponent />
      </Suspense>
    </Router>
  );
};

export default App;
