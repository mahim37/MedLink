import "./css/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import Businesses from "./routes/Businesses";
import Marketplaces from "./routes/Marketplaces";
import Company from "./routes/Company";
import Resources from "./routes/Resources";
import Signup from "./routes/Signup";
import SignupPatient from "./routes/Signuppatient";
import Listmynft from "./Listmynft";
import Dashboard from "./Profile";
import Transfernft from './Transfernft';
import Signupdoctor from "./routes/Signupdoctor";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <ClimbingBoxLoader
            className="loadingwalacheez slide-in"
            color={'#222'}
            loading={loading}
            size={30}
          />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Businesses />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<SignupPatient />} />
          <Route path="/listmynft" element={<Listmynft />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/transfernft" element={<Transfernft />} />
          <Route path="/signupdoctor" element={<Signupdoctor />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
