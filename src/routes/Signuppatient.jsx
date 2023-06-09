import Dashboarddata from "../Dashboarddata";
import NewNavbar from "../components/NewNavbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function SignupPatient(e) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1000);
    }, []);

    return (
        <div>

    
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
        <div>
            <NewNavbar/>
            <Dashboarddata/>
            <Footer/>
        </div>
    )}
    </div>
  
    )
}
export default SignupPatient;