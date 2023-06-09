import "./css/Agreed.css";
import imgm1 from "./unlockinsights.jpeg";
import imgm2 from "./easyintegration.jpeg";
import imgm3 from "./teesramc.png";

function MarketplacesCards() {
  return (
    <div className="flex flex-col"> 
      
      <div className="flex p-16">
        <div className="flex flex-col w-1/2 justify-center animate-slideInLeft">
            <div className="flex p-4 gap-x-10">
              <i className="fa-solid fa-lock fa-2xl mt-5" style={{color:"#ffffff"}}></i>
              <h1 className="text-4xl text-slate-100">Unlock Insights</h1>
            </div>
            <p className="p-5 text-2xl text-slate-300 text-left">
              Our platform converts your medical history into an NFT and securely
              shares it with your designated doctor, unlocking valuable insights
              for personalized treatment and care.
            </p>
        </div>
        <div className="flex w-1/2 justify-center animate-slideInRight">
          <img className="" src={imgm1} alt="Unlock Insights" />
        </div>
      </div>

      <div className="flex p-16 flex-row-reverse ">
        <div className="flex flex-col w-1/2 justify-center p-4 animate-slideInRight">
            <div className="flex p-4 gap-x-10">
              <i className="fa-solid fa-lightbulb fa-2xl mt-5" style={{color:"#ffffff"}}></i>
              <h1 className="text-4xl text-slate-100">Easy Integration</h1>
            </div>
            <p className="p-5 text-2xl text-slate-300 text-left">
              Our user-friendly platform seamlessly integrates with your existing
              healthcare provider systems, making the conversion of your medical
              history into an NFT and sharing it with your doctor as easy as a few
              clicks.
            </p>
        </div>
        <div className="flex w-1/2 justify-center animate-slideInLeft">
          <img className="" src={imgm2} alt="Easy Integration" />
        </div>
      </div>

      <div className="flex p-16">
        <div className="flex flex-col w-1/2 justify-center animate-slideInLeft">
            <div className="flex p-4 gap-x-10">
              <i className="fa-solid fa-file-signature fa-2xl mt-5" style={{color:"#ffffff"}}></i>
              <h1 className="text-4xl text-slate-100">Store Your Data Securely</h1>
            </div>
            <p className="p-5 text-2xl text-slate-300 text-left">
              Our platform prioritizes your privacy and security. You can e-sign
              documents with confidence knowing that your medical history is
              converted into an NFT and securely shared only with your designated
              doctor.
            </p>
        </div>
        <div className="flex w-1/2 justify-center animate-slideInRight">
          <img className="" src={imgm3} alt="E-Sign with Confidence" />
        </div>
      </div>

    </div>
  );
}

export default MarketplacesCards;
