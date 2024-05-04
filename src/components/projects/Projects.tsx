'use client'

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import marujoArtImage from '../../../assets/marujoartstattoo.png';
import './Projects.scss';
import GitHubButton from '../buttons/gitHubButton/GitHubButton';

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const values = [
    { title: "Marujo Art's Tattoo", text: "Uma landing page para expor o trabalho no estúdio de tatuagens e piercings do meu irmão", image: marujoArtImage, link: 'https://www.google.com' },
    { title: "APIs OlíSaúde", text: "Teste usado para testar e aprimorar minhas habilidades com Laravel e Next", image: marujoArtImage, link: 'https://www.google.com' },
    { title: "Service-Desk", text: "Um app para gerenciar chamados de helpdesk e servicedesk", image: marujoArtImage, link: 'https://www.google.com' },
  ];

  return (
    <>
      <main id='projects' className='d-flex flex-column justify-content-center align-items-center text-center pb-5 my-5'>
        <h2 className='mt-5'>Nem só de ferramentas viverá o produto!</h2>
        <p>Em projetos pessoais amplio meus conhecimentos conceituais.</p>

        <Carousel activeIndex={index} onSelect={handleSelect} className="col-lg-8 carousel-dark slide align-self-center" data-bs-ride="carousel" data-bs-interval="false">
          <div className="carousel-inner">
            {values.map((value, i) => (
              <Carousel.Item key={i} className={i === index ? "carousel-item active" : "carousel-item"}>
                <div className="d-flex justify-content-center">
                  <Image src={value.image} className="d-block img-fluid py-5" alt={`Slide ${i + 1}`} />
                </div>
                <div className="carousel-caption d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75">
                  <h3>{value.title}</h3>
                  <h6 className='col-11'>{value.text}</h6>
                  <GitHubButton link={value.link} />
                </div>
              </Carousel.Item>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" onClick={() => setIndex((index - 1 + values.length) % values.length)}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={() => setIndex((index + 1) % values.length)}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </Carousel>
      </main>
    </>
  );
}