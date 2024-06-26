'use client'

import React, { useEffect, useState } from "react";
import "./ServiceBox.scss";

export default function ServicesBox() {
  const services = [
    { name: "Criação", description: "Crio soluções personalizadas para seu negócio, como Landing pages, sistemas e aplicativos web, assim otimizando seus processos." },
    { name: "Manutenção", description: "Presto serviços de manutenção e finalização de sites e sistemas. Corrijo bugs, otimizo o desempenho e implemento novas funcionalidades." },
    { name: "Integração", description: "Integro serviços em aplicativos e sistemas já existentes, garantindo que as plataformas de tecnologia trabalhem juntas " },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 701);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h2 className="text-center w-100 pt-5">Competências</h2>
      <div id="services" className={`d-flex align-items-center justify-content-center py-5 ${isSmallScreen ? 'flex-column' : 'gap-3'}`}>
        {services.map((service, index) => (
          <div className={`d-flex flex-column justify-content-center align-items-center text-center shadow w-${isSmallScreen ? '75' : '25'} border bg-white rounded${isSmallScreen ? ' mb-3' : ''}`} key={index}>
            <div className="box rounded px-2">{service.name}</div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
