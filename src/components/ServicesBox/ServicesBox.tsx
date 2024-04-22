import Service from "./Service/Service";
import "./ServiceBox.scss";

export default function ServicesBox(){
  return(
    <>
      <main className="service-box-main">
        <div className="service-box">
          <Service />
          <Service />
        </div>
      </main>
    </>
  );
};