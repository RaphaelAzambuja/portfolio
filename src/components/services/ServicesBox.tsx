'use client'

import React, { useEffect, useState } from "react";
import "./ServiceBox.scss";

export default function ServicesBox() {
  const services = [
    { name: "Criação", description: "Crio soluções personalizadas para seu negócio, como Landing pages, sistemas e aplicativos web, assim otimizando seus processos." },
    { name: "Manutenção", description: "Presto serviços de manutenção e finalização de sites e sistemas. Corrijo bugs, otimizo o desempenho e implemento novas funcionalidades." },
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
      <div className={`d-flex align-items-center justify-content-center ${isSmallScreen ? 'flex-column' : 'gap-3'}`}>
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
