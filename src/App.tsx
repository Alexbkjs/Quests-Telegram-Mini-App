import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import "./styles/App.css";
import Fallback from "./components/Fallback";
import RoutesComponent from "./routes/RoutesComponent";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<Fallback />}>
          <RoutesComponent />
        </Suspense>
      </Router>
    </UserProvider>
  );
};

export default App;
